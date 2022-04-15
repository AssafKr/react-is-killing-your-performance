import { Star } from "phosphor-react";
import { WithSteps } from "../components";
import { SlideTemplate } from "../components/SlidesTemplate";

export function AboutMe() {
  return (
    <SlideTemplate>
      <h1>About Me 👋</h1>
      <ul>
        <WithSteps>
          <li>
            <Star size={"5vw"} weight="thin" />
            <h2>Avoiding Death By A Thousand Cuts</h2>
          </li>
          <li>
            <Star size={"5vw"} weight="thin" />
            <h2>Avoiding Death By A Thousand Cuts</h2>
          </li>
          <li>
            <Star size={"5vw"} weight="thin" />
            <h2>Avoiding Death By A Thousand Cuts</h2>
          </li>
        </WithSteps>
      </ul>
    </SlideTemplate>
  );
}
