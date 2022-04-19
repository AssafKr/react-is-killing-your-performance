import React, { useState } from "react";
import { FCC } from "../../types";
import { Slow } from "./Slow";

const SlowWithMemo = React.memo(Slow);

export const MemoExample: FCC<{ withMemo?: boolean }> = ({
  withMemo = false,
}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col">
      <label>
        <p className="mb-[2vw]">write something:</p>
        <input
          className="text-[4vw] mb-[2vw]"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      {withMemo ? <SlowWithMemo /> : <Slow />}
    </div>
  );
};

export const WithMemo = () => {
  return (
    <MemoExample>
      <Slow />
    </MemoExample>
  );
};
