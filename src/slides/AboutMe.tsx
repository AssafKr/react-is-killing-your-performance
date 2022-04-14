import { Star } from "phosphor-react";
import { SlideTemplate } from "../components/SlidesTemplate";

export function AboutMe() {
  return (
    <SlideTemplate>
      <h1>About Me 👋</h1>
      <ul>
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
      </ul>
    </SlideTemplate>
  );
}
