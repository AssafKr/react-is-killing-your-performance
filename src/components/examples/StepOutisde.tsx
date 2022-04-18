import React, { Children, useState } from "react";

export const WithAmount: React.FC<{
  children: (amount: number) => React.ReactNode;
}> = ({ children }) => {
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <input
        style={{ width: "400px" }}
        type="range"
        min="2500"
        max="10000"
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      />
      <div>{children(amount)}</div>;
    </div>
  );
};
