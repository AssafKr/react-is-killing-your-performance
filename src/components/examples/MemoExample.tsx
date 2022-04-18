import React, { useState } from "react";

const Slow = () => {
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > 100) {
      break;
    }
  }

  return <div className="text-[2vw]">I'm slow... 🐌</div>;
};

const SlowWithMemo = React.memo(Slow);

export const MemoExample: React.FC<{ withMemo?: boolean }> = ({
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
