import { useEffect, useRef } from "react";

let renderCounts = 0;

export const Slow = () => {
  const ref = useRef<HTMLDivElement>(null);
  let start = new Date().getTime();

  for (let i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > 100) {
      break;
    }
  }

  useEffect(() => {
    renderCounts += 1;
    ref.current.innerText = "renders: " + renderCounts;
  });

  return (
    <div className="text-[2vw]">
      I'm slow... 🐌 <span ref={ref} className="opacity-70 ml-[4vw] text-[2vw] underline"></span>
    </div>
  );
};
