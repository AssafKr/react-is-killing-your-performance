import { WithSteps } from "../../components/deck";
import { ListItem, SlideTemplate } from "../common";
import TwitterScreenshot from "./twitter.png";

export const WhyNotReactive = () => {
  return (
    <SlideTemplate>
      <h1 className="mt-[1vw] text-[6vw]">so, why not reactive?</h1>
      <WithSteps type="replace">
        <div className="flex flex-col justify-center items-center">
          <img src={TwitterScreenshot} className="h-[40vw]" />
        </div>
        <div>
          <ListItem>
            using the pull based approach, you can harness scheduling for
            powerful tools
          </ListItem>
        </div>
      </WithSteps>
    </SlideTemplate>
  );
};
