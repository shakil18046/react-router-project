import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Dashboard = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("rechart.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  console.log(chart);
  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={chart}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sell" fill="#8884d8" />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </BarChart>
      <BarChart
        width={500}
        height={300}
        data={chart}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sell" stackId="a" fill="#8884d8" />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
