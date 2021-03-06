import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { FCC } from "../../types";
import { currStepSelector, deckStateAtom } from "./state";

interface WithStepsProps {
  type?: "sequence" | "replace";
}

export const WithSteps: FCC<WithStepsProps> = ({
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

  let slicedChildren: React.ReactNode; // jesus

  if (childrenCount > 1) {
    switch (type) {
      case "sequence":
        slicedChildren = React.Children.toArray(children).slice(0, currStep);
        break;
      case "replace":
        slicedChildren = React.Children.toArray(children)[currStep];
        break;
    }
  } else {
    slicedChildren = children;
  }

  return <>{slicedChildren}</>;
};
