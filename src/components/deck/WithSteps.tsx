import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currStepSelector, deckStateAtom } from "./state";

interface WithStepsProps {
  type?: "sequence" | "replace";
}

export const WithSteps: React.FC<WithStepsProps> = ({
  children,
  type = "sequence",
}) => {
  const setDeckState = useSetRecoilState(deckStateAtom);
  const currStep = useRecoilValue(currStepSelector);
  const childrenCount = React.Children.count(children);

  useEffect(() => {
    setDeckState((prev) => ({ ...prev, stepsAmount: childrenCount }));
    return () => setDeckState((prev) => ({ ...prev, stepsAmount: 0 }));
  }, [childrenCount]);

  let slicedChilren: React.ReactNode; // jesus

  if (childrenCount > 1) {
    switch (type) {
      case "sequence":
        slicedChilren = React.Children.toArray(children).slice(0, currStep);
        break;
      case "replace":
        slicedChilren = React.Children.toArray(children)[currStep];
        break;
    }
  } else {
    slicedChilren = children;
  }

  return <>{slicedChilren}</>;
};
