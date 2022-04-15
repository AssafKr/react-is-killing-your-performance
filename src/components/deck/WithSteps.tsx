import React, { useEffect } from "react";
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { currStepSelector, deckStateAtom } from "./state";

export const WithSteps: React.FC = ({ children }) => {
  const setDeckState = useSetRecoilState(deckStateAtom);
  const currStep = useRecoilValue(currStepSelector);
  const childrenCount = React.Children.count(children);

  useEffect(() => {
    setDeckState((prev) => ({ ...prev, stepsAmount: childrenCount }));
    return () => setDeckState((prev) => ({ ...prev, stepsAmount: 0 }));
  }, [childrenCount]);

  let childrenWithButtons: React.ReactNode;

  if (childrenCount > 1) {
    childrenWithButtons = React.Children.toArray(children).slice(0, currStep);
  } else {
    childrenWithButtons = children;
  }

  return <>{childrenWithButtons}</>;
};
