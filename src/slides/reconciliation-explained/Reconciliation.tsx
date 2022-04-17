import { Code } from "phosphor-react";
import { WithSteps } from "../../components/deck";
import { SlideTemplate, BigSubtitle } from "../common";
import { TheDOMTree } from "./TheDOMTree";
import { TheVDomTree } from "./TheVDOMTree";
import { WIPDom } from "./WIPDom";

export const Reconciliation: React.FC = () => {
  return (
    <SlideTemplate>
      <h1>it's a kind of magic ✨</h1>
      <WithSteps type="replace">
        <BigSubtitle>
          A simplistic overview of the <em>reconciliation algorithm</em>
        </BigSubtitle>
        <TheDOMTree />
        <TheVDomTree />
        <div className="ml-[21vw] mt-[21vw]">
          <Code>{`setCount((c) => c + 1) // now count = 1`}</Code>
        </div>
        <WIPDom />
        <BigSubtitle>
          this happens at <em>runtime</em>
        </BigSubtitle>
      </WithSteps>
    </SlideTemplate>
  );
};
