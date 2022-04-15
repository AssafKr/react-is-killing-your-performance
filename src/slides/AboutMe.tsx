import { Star } from "phosphor-react";
import { ListItem, WithSteps } from "../components";
import { SlideTemplate } from "../components/SlidesTemplate";

export function AboutMe() {
  return (
    <SlideTemplate>
      <h1>About Me 👋</h1>
      <ul>
        <WithSteps>
          <ListItem content="Assaf Krintza, from Tel-Aviv 🇮🇱" />
          <ListItem content="Co-founder of Livecycle." />
          <ListItem content="love 💙 React 💙 and fast user interfaces" />
        </WithSteps>
      </ul>
    </SlideTemplate>
  );
}
