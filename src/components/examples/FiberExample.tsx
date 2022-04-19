import { Code, SlideTemplate } from "../../slides/common";
import { ChartWithPointsImperative, ChartWithPoints } from "./ChartWithPoints";
import LagRadar from "react-lag-radar";
import { useState } from "react";
import { WithAmount } from "./StepOutisde";
import { WithSteps } from "../deck";

export const FiberExample = () => {
  const [isUsingDeferredValue, setIsUsingDeferredValue] = useState(false);

  return (
    <SlideTemplate>
      <WithSteps type="replace">
        <WithAmount>
          {(amount) => {
            return (
              <>
                <p>
                  <em>Imperative</em>
                </p>
                <ChartWithPointsImperative amountOfData={amount} />
                <p>
                  <em>Declarative</em>
                </p>
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
        <>
          <h1 className="text-[4vw] my-[1vw]">only high priority</h1>
          <Code>
            {`export const ChartWithPoints = () => {
  const [data, setData] = useState(generateRandomData());
  
  return (
    <div>
    <DragZone onDrag={() => {setData(generateRandomData())}}/>
    <Chart>{data.map((p, i) => (<Circle point={p} key={i} />))}</Chart>
    </div>
    );
  };`}
          </Code>
        </>
        <>
          <h1 className="text-[4vw] my-[1vw]">
            with low priority (useDeferredValue)
          </h1>
          <Code>
            {`export const ChartWithPoints = () => {
  const [data, setData] = useState(generateRandomData());
  const deferredData = useDeferredValue(data);

  const memoizedData = useMemo(
    () => deferredData.map((p, i) => <Circle p={p} key={i} i={i} />),
    [deferredData]
  );

  return (
    <div>
      <DragZone onDrag={() => {setData(generateRandomData())}}/>
      <Chart>{memoizedData}</Chart>
    </div>
  );
};`}
          </Code>
        </>
        <>
          <h1 className="text-[4vw] my-[1vw]">
            with low priority (startTransition)
          </h1>
          <Code>
            {`export const ChartWithPoints = () => {
  const [data, setData] = useState(generateRandomData());


  return (
    <div>
      <DragZone onDrag={
        () => { startTransition(() => setData(generateRandomData())}}/>
      <Chart>{data}</Chart>
    </div>
  );
};`}
          </Code>
        </>
      </WithSteps>
    </SlideTemplate>
  );
};
