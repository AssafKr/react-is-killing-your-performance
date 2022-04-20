import { WithSteps } from "../../components/deck";
import { SlideTemplate, BigSubtitle, Code } from "../common";
import { FinalDom } from "./FinalDOM";
import { TheDOMTree } from "./TheDOMTree";
import { TheVDomTree } from "./TheVDOMTree";
import { WIPDom } from "./WIPDom";

export const ReconciliationExplained: React.FC = () => {
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
        <TheVDomTree after />
        <WIPDom />
        <Code>{`// apply the diff to the DOM
p.innerText = \`count: \${count}\`;
parentElement.removeChild(confettiMessage);`}</Code>
        <FinalDom />
        <BigSubtitle>
          this happens at <em>runtime</em>
        </BigSubtitle>
      </WithSteps>
    </SlideTemplate>
  );
};
