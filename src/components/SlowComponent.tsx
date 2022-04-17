import { Skull } from "phosphor-react";
import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { Action } from "../types";
import { Chart } from "./Chart";

const DragZone: React.FC<{ callback: Action }> = ({ callback }) => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  return (
    <div
      className="w-[24vw] border relative cursor-none"
      onMouseMove={(e) => {
        const rect = (e.target as HTMLDivElement).getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.x - 16,
          y: e.clientY - rect.y - 16,
        });
        callback();
      }}
    >
      <Skull
        className="absolute"
        size={"3vw"}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
        onMouseMove={(e) => {
          e.stopPropagation();
        }}
      />
    </div>
  );
};

function generateData() {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({
      x: Math.round(Math.random() * 730),
      y: Math.round(Math.random() * 250),
    });
  }
  return data;
}

export const SlowComponent: React.FC = () => {
  const [data, setData] = useState(generateData());

  return (
    <div className="flex flex-row justify-between mt-[4vw]">
      <DragZone
        callback={() => {
          setData(generateData());
        }}
      />
      <Chart data={data} />
      {/* <ScatterChart
        width={730}
        height={250}
        margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" name="stature" unit="cm" />
        <YAxis dataKey="y" name="weight" unit="kg" />
        <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="just some random data" data={data} fill="#ffffff" />
      </ScatterChart> */}
    </div>
  );
};
