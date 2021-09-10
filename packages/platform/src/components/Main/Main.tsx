import React, { useState } from "react";
import Graphic from "../Graphic/Graphic";
import { Select } from "@material-ui/core";

export type SerialReadings = {
  [key: string]: { x: number; y: number }[];
};

const Main = () => {
  const serialReadings = {
    "00A1": [
      { x: 1, y: 20 },
      { x: 2, y: 0 },
      { x: 3, y: 5 },
      { x: 4, y: 45 },
      { x: 5, y: 55 },
      { x: 6, y: 5 },
    ],
    "00B2": [
      { x: 1, y: 0 },
      { x: 2, y: 40 },
      { x: 3, y: 15 },
      { x: 4, y: -35 },
      { x: 5, y: 25 },
      { x: 6, y: 10 },
    ],
    "00C1": [
      { x: 1, y: 20 },
      { x: 2, y: 40 },
      { x: 3, y: 15 },
      { x: 4, y: 35 },
      { x: 5, y: 5 },
      { x: 6, y: 95 },
    ],
    "00D7": [
      { x: 1, y: 50 },
      { x: 2, y: 40 },
      { x: 3, y: 35 },
      { x: 4, y: 5 },
      { x: 5, y: 100 },
      { x: 6, y: 20 },
    ],
  };

  const [serialNumber, setSerialNumber] = useState<string>("00A1");
  const [serialReading, setSerialReading] = useState<
    { x: Number; y: Number }[]
  >(serialReadings["00A1"]);

  return (
    <div className="Main">
      <Select
        native
        value={serialNumber}
        onChange={(event) => setSerialNumber(event.target.value as string)}
      >
        <option value={"00A1"}>00A1</option>
        <option value={"00B2"}>00B2</option>
        <option value={"00C1"}>00C1</option>
        <option value={"00D7"}>00D7</option>
      </Select>
      <Graphic vectors={(serialReadings as SerialReadings)[serialNumber]} />
    </div>
  );
};

export default Main;
