import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Action } from "../types";

interface WithButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const AdvanceArea: React.FC<{
  onClick?: () => void;
  direction: "left" | "right";
}> = ({ onClick, direction }) => {
  const Icon = direction === "left" ? ArrowFatLeft : ArrowFatRight;
  return (
    <button
      onClick={onClick}
      className="disabled:opacity-0 transition-opacity ease-in-out opacity-0 hover:opacity-50 duration-300 cursor-pointer"
      disabled={onClick === undefined}
    >
      <Icon size={68} weight="fill" />
    </button>
  );
};

const WithButtons: React.FC<WithButtonsProps> = ({
  children,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="flex flex-row justify-between">
      <AdvanceArea onClick={onPrevious} direction="left" />
      {children}
      <AdvanceArea onClick={onNext} direction="right" />
    </div>
  );
};

export const Deck: React.FC<{
  children: (start: Action, finish: Action) => React.ReactNode;
}> = ({ children }) => {
  const [currSlide, setCurrSlide] = useState(0);
  const [isAChildStepping, setIsAChildStepping] = useState(false);
  console.log(isAChildStepping);
  const actualChildren = (
    children(
      () => {
        setIsAChildStepping(true);
      },
      () => {
        setIsAChildStepping(false);
      }
    ) as any
  ).props.children as React.ReactNode; // 🤮

  const actualChildrenCount = React.Children.count(actualChildren);

  const onPrevious = useCallback(() => {
    if (isAChildStepping) return;

    setCurrSlide((currSlide) => {
      if (currSlide > 0) {
        return currSlide - 1;
      }
      return currSlide;
    });
  }, [isAChildStepping]);

  const onNext = useCallback(() => {
    if (isAChildStepping) return;

    setCurrSlide((currSlide) => {
      if (actualChildrenCount > 1 && currSlide < actualChildrenCount - 1) {
        return currSlide + 1;
      }
      return currSlide;
    });
  }, [isAChildStepping, actualChildrenCount]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onPrevious, onNext]);

  let childrenWithButtons: React.ReactNode;

  if (actualChildrenCount > 1) {
    childrenWithButtons = (
      <WithButtons onNext={onNext} onPrevious={onPrevious}>
        {React.Children.toArray(actualChildren)[currSlide]}
      </WithButtons>
    );
  } else {
    childrenWithButtons = actualChildren;
  }

  return <div>{(actualChildren as any)[currSlide]}</div>;
};
