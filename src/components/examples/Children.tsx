import { useState } from "react";
import { Slow } from "./Slow";

function generateHexNumber() {
  return Math.round(Math.random() * 255).toString(16);
}

export const WithRandomColorBorder: React.FC<{ usingChildren?: boolean }> = ({
  children,
  usingChildren = false,
}) => {
  const [borderColor, setBorderColor] = useState("white");

  return (
    <div
      className="border-[0.3vw] p-[2vw] flex flex-row items-center justify-between "
      style={{ borderColor: borderColor }}
    >
      <button
        onClick={() => {
          setBorderColor(
            `#${generateHexNumber()}${generateHexNumber()}${generateHexNumber()}`
          );
        }}
      >
        generate a nice random border color
      </button>
      {usingChildren ? children : <Slow />}
    </div>
  );
};
