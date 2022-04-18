import { ThumbsUp } from "phosphor-react";
import { WithSteps } from "../components/deck";
import { WithRandomColorBorder } from "../components/examples/Children";
import { Code, ListItem, SlideTemplate } from "./common";
import LagRadar from "react-lag-radar";
import { Slow } from "../components/examples/Slow";

export const UseTheChildrenProp = () => {
  return (
    <SlideTemplate>
      <h1 className="text-[5vw]">
        separate using the <em>children</em> prop
      </h1>
      <WithSteps type="replace">
        <>
          <ListItem>
            use the <em>children</em> to wrap other components inside of yours
          </ListItem>
          <ListItem Icon={ThumbsUp}>
            makes your components more general purpose
          </ListItem>
          <ListItem Icon={ThumbsUp}>reduce render calls</ListItem>
        </>
        <WithRandomColorBorder />
        <>
          <WithRandomColorBorder />
          <LagRadar size={400} />
        </>
        <Code language="tsx">
          {`export const WithRandomColorBorder = () => {
  const [borderColor, setBorderColor] = useState("white");

  return (
    <div style={{ borderColor: borderColor }}>
      <button onClick={() => {setBorderColor(generateRandomColor())}}>
        generate a nice random border color
      </button>
      <Slow />
    </div>
  );
};`}
        </Code>
        <Code language="tsx">
          {`export const WithRandomColorBorder = ({children}) => {
  const [borderColor, setBorderColor] = useState("white");

  return (
    <div style={{ borderColor: borderColor }}>
      <button onClick={() => {setBorderColor(generateRandomColor())}}>
        generate a nice random border color
      </button>
      {children}
    </div>
  );
};`}
        </Code>
        <Code language="tsx">
          {`export const SlowWithBorder = () => {
  return (
    <WithRandomColorBorder>
      <Slow />
    </WithRandomColorBorder>
  );
};`}
        </Code>
        <>
          <WithRandomColorBorder usingChildren>
            <Slow />
          </WithRandomColorBorder>
          <LagRadar size={400}/>
        </>
      </WithSteps>
    </SlideTemplate>
  );
};
