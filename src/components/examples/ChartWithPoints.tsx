import { Skull } from "phosphor-react";
import { useDeferredValue, useMemo, useRef, useState } from "react";
import { Action, FCC } from "../../types";
import { Chart } from "./Chart";
import { Data } from "./types";

interface Props {
  amountOfData?: number;
  usingDeferredValue?: boolean;
}

const Circle: FCC<{
  p: { x: number; y: number };
  i: number;
}> = ({ p, i }) => {
  return <circle cx={p.x} cy={p.y} r="0.1vw" fill="rgb(255,255,255,0.2)" />;
};

export const ChartWithPoints: React.FC<Props> = ({
  amountOfData = 5000,
  usingDeferredValue = false,
}) => {
  const [data, setData] = useState(generateData(amountOfData));
  const deferred = useDeferredValue(data);
  const memoizedData = useMemo(
    () => deferred.map((p, i) => <Circle p={p} key={i} i={i} />, [deferred]),
    [deferred]
  );

  return (
    <div className="flex flex-row justify-between">
      <DragZone
        callback={() => {
          setData(generateData(amountOfData));
        }}
      />
      <Chart>
        <g>
          {usingDeferredValue
            ? memoizedData
            : data.map((p, i) => <Circle p={p} key={i} i={i} />)}
        </g>
      </Chart>
    </div>
  );
};

export const ChartWithPointsImperative: React.FC<Props> = ({
  amountOfData = 5000,
}) => {
  const ref = useRef<SVGGElement>(null);

  return (
    <div className="flex flex-row justify-between">
      <DragZone
        callback={() => {
          ref.current &&
            imperativelyDrawPointsFromData(
              generateData(amountOfData),
              ref.current
            );
        }}
      />
      <Chart>
        <g ref={ref} />
      </Chart>
    </div>
  );
};

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

function generateData(amount: number = 7500): Data {
  const data = [];
  for (let i = 0; i < amount; i++) {
    data.push({
      x: Math.round(Math.random() * 730),
      y: Math.round(Math.random() * 250),
    });
  }
  return data;
}

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
