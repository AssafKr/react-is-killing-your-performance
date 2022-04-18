import { WithSteps } from "../components/deck";
import { MemoExample } from "../components/examples/MemoExample";
import { Code, ListItem, SlideTemplate } from "./common";
import LagRadar from "react-lag-radar";

export const Memo: React.FC = () => {
  return (
    <SlideTemplate>
      <h1>React.memo</h1>
      <WithSteps type="replace">
        <ul>
          <ListItem>
            if your component is "pure" you can wrap it with the{" "}
            <em>React.memo</em> HOC
          </ListItem>
          <ListItem>
            a pure component is one that renders the same thing given the same
            props and state
          </ListItem>
        </ul>
        <h2>without memo →</h2>
        <>
          <MemoExample />
          <LagRadar size={400} />
        </>
        <Code language="tsx">
          {`function SomeComponent() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <label>
        write something:
        <input value={inputValue} 
               onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <Slow />
    </div> 
  ); 
};`}
        </Code>
        <h2>with memo:</h2>
        <div className="flex flex-row items-center justify-center">
          <Code language="tsx">{`
const Slow = () => {
  // perform CPU intense work 
  ...

  return <p>I'm slow... 🐌</p>
}`}</Code>
          <p className="mx-[2vw] text-[5vw]">➡</p>
          <Code language="tsx">{`
const Slow = React.Memo(() => {
  // perform CPU intense work 
  ...

  return <p>I'm slow... 🐌</p>
})`}</Code>
        </div>
        <>
          <MemoExample withMemo />
          <LagRadar size={400} />
        </>
      </WithSteps>
    </SlideTemplate>
  );
};
