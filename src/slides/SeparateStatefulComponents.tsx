import { WithSteps } from "../components/deck";
import { Code, ListItem, SlideTemplate } from "./common";
import { ThumbsUp } from "phosphor-react";

export const SeparateStatefulComponents = () => {
  return (
    <SlideTemplate>
      <h1 className="text-[7vw]">separate into components</h1>
      <WithSteps type="replace">
        <></>
        <ListItem>
          in previous example, the <em>Slow</em> component did not have any
          dependencies (props)
        </ListItem>
        <Code language="tsx">{`
const Slow = () => {
  // perform CPU intense work 
  ...

  return <p>I'm slow... 🐌</p>
}`}</Code>

        <ListItem>
          instead of using <em>memo</em> it's better to just detach it from the
          state updates
        </ListItem>
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
        <Code language="tsx">
          {`function MyInput() {
  const [inputValue, setInputValue] = useState("");
  return (
    <label>
        write something:
        <input value={inputValue} 
               onChange={(e) => setInputValue(e.target.value)} />
    </label>
  ); 
};`}
        </Code>
        <Code language="tsx">
          {`function SomeComponent() {
  return (
    <div>
      <MyInput />
      <Slow />
    </div> 
  ); 
};`}
        </Code>
        <>
          <ListItem>👍 better performance</ListItem>
          <ListItem>👍 better separation of concerns</ListItem>
        </>
      </WithSteps>
    </SlideTemplate>
  );
};
