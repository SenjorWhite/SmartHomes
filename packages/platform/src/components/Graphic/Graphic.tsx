import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from "@devexpress/dx-react-chart-material-ui";

interface IGraphic {
  vectors: { x: number; y: number }[];
}

const Graphic = (props: IGraphic) => {
  return (
    <Paper>
      <Chart data={props.vectors}>
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="y" argumentField="x" />
      </Chart>
    </Paper>
  );
};

export default Graphic;
