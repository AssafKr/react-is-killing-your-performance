import { useEffect, useState } from "react";
import logo from "../assets/lc-logo.svg";
import { SlideTemplate } from "../components/SlidesTemplate";
import { Action, WithStepperCallback } from "../types";

export const Intro: React.FC = () => {
  return (
    <SlideTemplate>
      <h1>React Is Killing Your Performance And That's Your Fault</h1>
      <h2 className="italic">Avoiding Death By A Thousand Cuts</h2>
    </SlideTemplate>
  );
};
