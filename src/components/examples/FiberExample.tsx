import { SlideTemplate } from "../../slides/common";
import { ChartWithPointsImperative, ChartWithPoints } from "./ChartWithPoints";
import LagRadar from "react-lag-radar";
import { useState } from "react";
import { WithAmount } from "./StepOutisde";

export const FiberExample = () => {
  const [isUsingDeferredValue, setIsUsingDeferredValue] = useState(false);

  return (
    <SlideTemplate>
      <WithAmount>
        {(amount) => {
          return (
            <>
              {" "}
              <p>Imperative</p>
              <ChartWithPointsImperative amountOfData={amount} />
              <p>Declarative</p>
              <>
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    checked={isUsingDeferredValue}
                    onChange={() =>
                      setIsUsingDeferredValue(!isUsingDeferredValue)
                    }
                    className="mr-[1vw]"
                  />
                  <p>using useDeferredValue</p>
                </div>
                <ChartWithPoints
                  usingDeferredValue={isUsingDeferredValue}
                  amountOfData={amount}
                />
              </>
              <LagRadar size={400} />
            </>
          );
        }}
      </WithAmount>
    </SlideTemplate>
  );
};
