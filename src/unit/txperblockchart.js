import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

const data = [];
for(let i = 3773043; i < 3773095; i++) {
    let ele = {
        height: i,
        txperblock: Math.round(100 * Math.random()),
    };
    data.push(ele);
}

export default class TxCountChart extends PureComponent {

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
        <YAxis dataKey="txperblock" />
        <Tooltip labelFormatter={(value, name, props) => [`height: ${value}`]}/>
        <Bar dataKey="txperblock">
          {data.map((value, index) => <Cell key={index} fill={value.txperblock < 20 ? "green" : (value.txperblock < 100 ? "orange" : "red")} />)}
        </Bar>
      </BarChart>
    );
  }
}
