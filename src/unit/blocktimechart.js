import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";
import "../style/barchart.css";

const data = [];
for(let i = 3773043; i < 3773093; i++) {
    let ele = {
        height: i,
        blocktime: 15 + Math.round(10 * Math.random()),
    };
    data.push(ele);
}

export default class BlockTimeChart extends PureComponent {

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="height" />
        <YAxis dataKey="blocktime" label="Time(s)"/>
        <Tooltip labelFormatter={(value, name, props) => [`height: ${value}`]}/>
        <Bar dataKey="blocktime">
          {data.map((value, index) => <Cell key={index} fill={value.blocktime < 20 ? "green" : (value.blocktime < 30 ? "orange" : "red")}/>)}
        </Bar>
      </BarChart>
    );
  }
}
