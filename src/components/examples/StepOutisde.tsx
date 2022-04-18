import React, { useState } from "react";

export const WithAmount: React.FC<{
  children: (amount: number) => React.ReactNode;
}> = ({ children }) => {
  const [amount, setAmount] = useState(5000);

  return (
    <div>
      <label className="mr-[3vw] text-[2vw]">no. of points: {amount}</label>
      <input
        style={{ width: "50vw" }}
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
