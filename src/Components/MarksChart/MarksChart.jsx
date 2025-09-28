import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  //   data processing for the chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };

    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;
    return student;
  });

  console.log(marksChartData);
  return (
    <div className="grid justify-center py-10">
      <BarChart width={800} height={300} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Bar dataKey="avg" fill="Red"></Bar>
        <Bar dataKey="chemistry" fill="blue"></Bar>
        <Bar dataKey="physics" fill="purple"></Bar>
        <Bar dataKey="math" fill="pink"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
