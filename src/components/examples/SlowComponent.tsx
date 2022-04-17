import { Skull } from "phosphor-react";
import { useState } from "react";
import { Action } from "../../types";
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
      <Chart>
        {data.map((p, i) => (
          <circle
            cx={p.x}
            cy={p.y}
            r="0.1vw"
            stroke-width="3"
            fill="rgb(255,255,255,0.2)"
            key={i}
          />
        ))}
      </Chart>
    </div>
  );
};
