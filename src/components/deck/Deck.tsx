import React, { useEffect } from "react";
import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currSlideSelector,
  deckStateAtom,
  useGetDeckControls,
  useSubscribeArrowsToDeck,
} from "./state";

interface WithButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const DeckControlsZone: React.FC<{
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
      <DeckControlsZone onClick={onPrevious} direction="left" />
      {children}
      <DeckControlsZone onClick={onNext} direction="right" />
    </div>
  );
};

export const Deck: React.FC = ({ children }) => {
  const currSlide = useRecoilValue(currSlideSelector);
  const controls = useGetDeckControls();
  const setSlidesAmount = useSetRecoilState(deckStateAtom);
  useSubscribeArrowsToDeck(controls);

  const childrenCount = React.Children.count(children);

  useEffect(() => {
    setSlidesAmount((prev) => ({ ...prev, slidesAmount: childrenCount }));
  }, [childrenCount]);

  let childrenWithButtons: React.ReactNode;
  if (childrenCount > 1) {
    childrenWithButtons = (
      <WithButtons onNext={controls.next} onPrevious={controls.previous}>
        {React.Children.toArray(children)[currSlide]}
      </WithButtons>
    );
  } else {
    childrenWithButtons = children;
  }

  return <div>{childrenWithButtons}</div>;
};
