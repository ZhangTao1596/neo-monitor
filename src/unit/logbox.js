import React, { Component } from 'react';
import '../style/log.css';
import api from '../api/logws';
import ScrollArea from 'react-scrollbar';
import { Combobox, DateTimePicker } from 'react-widgets';
import Moment from "moment";
import momentLocalizer from 'react-widgets-moment';
import { Button, ButtonGroup } from "react-bootstrap";
import 'react-widgets/dist/css/react-widgets.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Moment.locale('en');
momentLocalizer();

class Log extends Component {
  padding(num, length) {
    for (var len = (num + "").length; len < length; len = num.length) {
      num = "0" + num;
    }
    return num;
  }
  render() {
    let index = this.padding(this.props.index, 4);
    return (
      <div className="log">
        <p>
          <span>
            {`${index}:[${this.props.name}] ${this.props.text}`}
          </span>
        </p>
      </div>
    );
  }
}

class LogList extends Component {
  constructor(props) {
    super(props);
    this.state = ({ autoScroll: true });
  }
  componentDidUpdate() {
    if (this.state.autoScroll)
      this.scrollArea.scrollBottom();
  }
  onscroll = event => {
    if (!this.state.autoScroll) {
      if (event.topPosition === event.realHeight - event.containerHeight) {
        this.setState({ autoScroll: true });
      }
    }
    if (this.state.autoScroll) {
      if (event.topPosition < event.realHeight - event.containerHeight) {
        this.setState({ autoScroll: false });
      }
    }
  }
  render = function () {
    var loglistFunc = this.props.data.map(function (log) {
      return (
        <Log text={log.Text} name={log.Name} key={log.Key} index={log.Key} />
      );
    });
    return (
      <ScrollArea
        ref={r => this.scrollArea = r}
        speed={0.8}
        className="scrollarea"
        contentClassName="loglist"
        horizontal={false}
        verticalScrollbarStyle={{
          "width": "8px",
          "height": "20px",
          "background": "white",
          "marginLeft": "0px",
        }}
        onScroll={this.onscroll}
      >
        {loglistFunc}
      </ScrollArea>
    );
  }
}

export default class LogBox extends Component {
  logHandler = (log, err) => {
    if (err) {
      console.log(err);
      return;
    }
    if (this.state.tags.every(ele => ele !== log.Name)) {
      let tags = this.state.tags;
      tags.push(log.Name);
      this.setState({ tags: tags });
    }
    if (this.state.tag !== "all" && log.Name !== this.state.tag)
      return;
    let index = this.state.data.length + 1;
    if (10000 < index) {
      log.Key = 1;
      this.setState({ data: [log] });
      return;
    }
    log.Key = index;
    let newdata = this.state.data.concat(log);
    this.setState({ data: newdata });
  }
  constructor(props) {
    super(props);
    this.state = { data: [], tag: "all", tags: ["all"] };
  }
  componentWillMount() {
  }
  componentDidMount() {
    api.Regist(this.state.tag, this.logHandler);
  }
  render() {
    let setRealtime = (flag) => {
        this.setState({realtime: flag});
    }
    return (
      <div className="logBox" style={{ height: 1000 }}>
        <div className="header">
          <Combobox
            defaultValue={"all"}
            data={this.state.tags}
            onChange={value => {
              this.setState({ data: [], tag: value });
              api.Regist(value, this.logHandler);
            }}
          />
          <ButtonGroup>
            <Button
              active={false}
              onClick={() => setRealtime(true)}
            >
              Realtime
            </Button>
            <Button
              active={this.state.realtime}
              onClick={() => setRealtime(false)}
            >
              History
            </Button>
          </ButtonGroup>
          <DateTimePicker format="YYYY-MM-DD kk:mm" />
          <DateTimePicker format="YYYY-MM-DD kk:mm" />
        </div >
        <LogList data={this.state.data} />
      </div>
    );
  }
}