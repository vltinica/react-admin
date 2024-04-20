import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chartTatle">{title}</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" stroke="#031f29" />
          <YAxis stroke="#031f29" />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey={dataKey} stroke="#031f29" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
