import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import React, { useState } from "react";

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

export const Deck: React.FC = ({ children }) => {
  const [currSlide, setCurrSlide] = useState(0);
  let content: React.ReactNode | React.ReactElement | React.ReactElement[];

  if (Array.isArray(children)) {
    content = (
      <WithButtons
        onNext={
          currSlide < children.length - 1
            ? () => {
                setCurrSlide((currSlide) => currSlide + 1);
              }
            : undefined
        }
        onPrevious={
          currSlide > 0
            ? () => {
                setCurrSlide((currSlide) => currSlide - 1);
              }
            : undefined
        }
      >
        {children[currSlide]}
      </WithButtons>
    );
  } else {
    content = children;
  }

  return <div>{content}</div>;
};
