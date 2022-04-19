import { WithSteps } from "../components/deck";
import {
  ChartWithPoints,
  ChartWithPointsImperative,
} from "../components/examples/ChartWithPoints";
import { Code, ListItem, SlideTemplate } from "./common";
import LagRadar from "react-lag-radar";
import { WithAmount } from "../components/examples/StepOutisde";

export const StepOutside = () => {
  return (
    <SlideTemplate>
      <h1 className="text-[5vw]">stepping outside the reconciliation</h1>
      <WithSteps type="replace">
        <></>
        <ul>
          <ListItem>
            in some (rare) cases, you might want to consider stepping outside of
            the reconciliation loop
          </ListItem>
          <ListItem>remember the chart example?</ListItem>
        </ul>
        <ChartWithPoints />
        <Code language="tsx">{`
export const ChartWithPoints = () => {
  const [data, setData] = useState(generateRandomData());

  return (
    <div>
      <DragZone onDrag={() => {setData(generateRandomData())}}/>
      <Chart>{data.map((p, i) => (<Circle point={p} key={i} />))}</Chart>
    </div>
  );
};`}</Code>
        <ul>
          <ListItem>you can't really avoid render calls</ListItem>
          <ListItem>react, in this case, is pure unnecessary overhead</ListItem>
          <ListItem>
            we can just imperatively apply state changes ourselves
          </ListItem>
        </ul>
        <Code language="tsx">
          {`export const ChartWithPoints = () => {
  const ref = useRef(null);
  return (
    <div>
      <DragZone onDrag={() => draw(data, ref.current)} />
      <Chart>
        <g ref={ref} />
      </Chart>
    </div>);};`}
        </Code>
        <Code>
          {`function draw(data, parent) {
  if (data.length !== parent.children.length) {
    // adds or remove parent's children as necessary
    setChildrenToAmount(parent, data.length);
  }
  
  for (let i = 0; i < data.length; i++) {
    setCircleAttributes(data[i], parent.children[i]);
  }
}`}
        </Code>
      </WithSteps>
    </SlideTemplate>
  );
};

export const StepOutsideFinalExample = () => {
  return (
    <div>
      <WithAmount>
        {(amount) => {
          return (
            <>
              <p>With reconciliation:</p>
              <ChartWithPoints amountOfData={amount} />
              <p>Without reconciliation:</p>
              <ChartWithPointsImperative amountOfData={amount} />
            </>
          );
        }}
      </WithAmount>
      <LagRadar size={400} />
    </div>
  );
};
