import { WithSteps } from "../components/deck";
import { ChartWithPoints } from "../components/examples/ChartWithPoints";
import { SlideTemplate, ListItem } from "./common";
import LagRadar from "react-lag-radar";

export const DevMode: React.FC = () => {
  return (
    <SlideTemplate>
      <h1>
        YOU ARE <em>NOT</em> GOING TO DIE
      </h1>
      <ul>
        <WithSteps type="sequence">
          <ListItem>are you running in dev mode?</ListItem>
          <ChartWithPoints amountOfData={2500} />
          <LagRadar size={400} />
        </WithSteps>
      </ul>
    </SlideTemplate>
  );
};
