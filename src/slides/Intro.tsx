import { useEffect, useState } from "react";
import logo from "../assets/lc-logo.svg";
import { SlideTemplate } from "../components/SlidesTemplate";
import { Action, WithStepperCallback } from "../types";

export const Intro: React.FC<WithStepperCallback> = ({ onStart, onFinish }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      onFinish();
    }
  }, [count]);

  useEffect(() => {
    onStart();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setCount((count) => count - 1);
      if (e.key === "ArrowRight") setCount((count) => count + 1);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <SlideTemplate>
      <h1>React Is Killing Your Performance And That's Your Fault</h1>
      <h2 className="italic">Avoiding Death By A Thousand Cuts</h2>
    </SlideTemplate>
  );
};
