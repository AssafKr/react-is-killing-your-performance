import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { deckStateAtom } from "./state";

export const WithSteps: React.FC = ({ children }) => {
  const setDeckState = useSetRecoilState(deckStateAtom);
  const childrenCount = React.Children.count(children);

  useEffect(() => {
    setDeckState((prev) => ({ ...prev, stepsAmount: childrenCount }));
    return () => setDeckState((prev) => ({ ...prev, stepsAmount: 0 }));
  }, [childrenCount]);

  return <>{children}</>;
};
