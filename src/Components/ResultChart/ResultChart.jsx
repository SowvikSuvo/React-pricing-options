import React from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const students = [
  { id: 1, name: "Amina Rahman", physics: 78, chemistry: 84, math: 91 },
  { id: 2, name: "Rafi Ahmed", physics: 65, chemistry: 72, math: 68 },
  { id: 3, name: "Maya Khan", physics: 92, chemistry: 89, math: 95 },
  { id: 4, name: "Tuhin Biswas", physics: 54, chemistry: 60, math: 58 },
  { id: 5, name: "Nusrat Jahan", physics: 80, chemistry: 76, math: 82 },
  { id: 6, name: "Sabbir Hossain", physics: 70, chemistry: 68, math: 74 },
];
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const ResultChart = () => {
  return (
    <div className="grid justify-center  mt-10">
      {/* <LineChart width={800} height={500} data={students}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="blue"></Line>
      </LineChart> */}

      <BarChart width={500} height={500} data={data}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey={"uv"} fill="purple"></Bar>
        <Bar dataKey={"pv"} fill="red"></Bar>
        <Bar dataKey={"amt"} fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default ResultChart;
