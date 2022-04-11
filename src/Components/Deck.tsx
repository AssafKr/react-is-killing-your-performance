import React, { useState } from "react";

interface WithButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
}

const WithButtons: React.FC<WithButtonsProps> = ({
  children,
  onPrevious,
  onNext,
}) => {
  return (
    <div>
      {onPrevious && <button onClick={onPrevious}>previous</button>}
      {children}
      {onNext && <button onClick={onNext}>next</button>}
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
