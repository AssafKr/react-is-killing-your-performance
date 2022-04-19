import { WithSteps } from "../components/deck";
import { ListItem, SlideTemplate } from "./common";

export function AboutMe() {
  return (
    <SlideTemplate>
      <h1>👋 about me</h1>
      <ul>
        <WithSteps>
          <ListItem>Assaf Krintza, from Tel-Aviv 🇮🇱</ListItem>
          <ListItem>Co-founder of Livecycle.</ListItem>
          <ListItem>💙 React and fast user interfaces</ListItem>
          <ListItem>Slides: https://github.com/AssafKr/react-is-killing-your-performance</ListItem>
          <ListItem>Twitter: @krinssaf</ListItem>
        </WithSteps>
      </ul>
    </SlideTemplate>
  );
}
