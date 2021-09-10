import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";

const Graphic = () => {
  const data = [
    { x: 1, y: 20 },
    { x: 2, y: 40 },
    { x: 3, y: 15 },
    { x: 4, y: 35 },
    { x: 5, y: 5 },
    { x: 6, y: 95 },
  ];
  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="y" argumentField="x" />
      </Chart>
    </Paper>
  );
};

export default Graphic;
