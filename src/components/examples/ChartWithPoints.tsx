import { Skull } from "phosphor-react";
import { useRef, useState } from "react";
import { Action } from "../../types";
import { Chart } from "./Chart";
import { Data } from "./types";

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

function generateData(): Data {
  const data = [];
  for (let i = 0; i < 10000; i++) {
    data.push({
      x: Math.round(Math.random() * 730),
      y: Math.round(Math.random() * 250),
    });
  }
  return data;
}

export const ChartWithPoints: React.FC = () => {
  const [data, setData] = useState(generateData());

  return (
    <div className="flex flex-row justify-between mt-[4vw]">
      <DragZone
        callback={() => {
          setData(generateData());
        }}
      />
      <Chart>
        <g>
          {data.map((p, i) => (
            <circle
              cx={p.x}
              cy={p.y}
              r="0.1vw"
              fill="rgb(255,255,255,0.2)"
              key={i}
            />
          ))}
        </g>
      </Chart>
    </div>
  );
};

const ns = "http://www.w3.org/2000/svg";

function setCircleAttributers(coors: Data[number], circle: SVGCircleElement) {
  circle.setAttribute("cx", coors.x.toString());
  circle.setAttribute("cy", coors.y.toString());
  circle.setAttribute("r", "0.1vw");
  circle.setAttribute("fill", "rgb(255,255,255,0.2)");
}

function imperativelyDrawPointsFromData(data: Data, parent: SVGGElement) {
  // I'm gonna assume that it's either 0 (don't have time for anything else)
  for (let i = 0; i < data.length; i++) {
    let c: SVGCircleElement;
    if (data.length !== parent.children.length) {
      c = document.createElementNS(ns, "circle");
      parent.appendChild(c);
    } else {
      c = parent.children[i] as SVGCircleElement;
      setCircleAttributers(data[i], c);
    }
  }
}

export const ChartWithPointsImperative: React.FC = () => {
  const ref = useRef<SVGGElement>(null);
  const [data, setData] = useState(generateData());

  return (
    <div className="flex flex-row justify-between mt-[4vw]">
      <DragZone
        callback={() => {
          setData(generateData());
          ref.current && imperativelyDrawPointsFromData(data, ref.current);
        }}
      />
      <Chart>
        <g ref={ref} />
      </Chart>
    </div>
  );
};
