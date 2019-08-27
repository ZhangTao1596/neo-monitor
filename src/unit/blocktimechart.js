import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

const data = [];
for(let i = 0; i < 50; i++) {
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
        <YAxis dataKey="blocktime" />
        <Tooltip />
        <Legend />
        <Bar dataKey="blocktime" fill="#8884d8" />
      </BarChart>
    );
  }
}
