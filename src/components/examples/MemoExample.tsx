import React, { useState } from "react";

const ArtificiallySlow = () => {
  let start = new Date().getTime();
  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > 100) {
      break;
    }
  }

  return <div>inside</div>;
};

const ArtificiallySlowWithMemo = React.memo(ArtificiallySlow);

export const MemoExample: React.FC<{ withMemo?: boolean }> = ({
  withMemo = false,
}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      some component
      <label>
        write something:
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      {withMemo ? <ArtificiallySlowWithMemo /> : <ArtificiallySlow />}
    </div>
  );
};

export const WithMemo = () => {
  return (
    <MemoExample>
      <ArtificiallySlowWithMemo />
    </MemoExample>
  );
};
