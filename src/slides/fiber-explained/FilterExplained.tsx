import { WithSteps } from "../../components/deck";
import { SlideTemplate } from "../common";
import { CurrVDOM } from "./CurrVDOM";
import { WIPVDOM } from "./WIPVDOM";
import { WIPVDOMFinished } from "./WIPVDOMFinished";
import { WIPVDOMThrown } from "./WIPVDOMThrown";

export const FiberExplained = () => {
  return (
    <SlideTemplate>
      <h1>React fiber - algorithm</h1>
      <WithSteps type="replace">
        <CurrVDOM />
        <WIPVDOM />
        <WIPVDOMFinished />
        <WIPVDOMThrown />
      </WithSteps>
    </SlideTemplate>
  );
};
