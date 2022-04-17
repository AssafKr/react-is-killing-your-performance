import { WithSteps } from "../components/deck";
import { MemoExample } from "../components/examples/MemoExample";
import { SlideTemplate } from "./common";

export const Memo: React.FC = () => {
  return (
    <SlideTemplate>
      <h1>React.memo</h1>
      <h2>
        if your component is "pure" you can wrap with with the React.memo HOC
      </h2>
      <WithSteps type="replace">
        <div>
          <h2>without memo:</h2>
          <MemoExample />
        </div>
        <div>
          <h2>with memo:</h2>
          <MemoExample withMemo />
        </div>
      </WithSteps>
    </SlideTemplate>
  );
};
