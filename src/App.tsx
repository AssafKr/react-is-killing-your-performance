import { Deck } from "./Components/Deck";
import { SlideTemplate } from "./Components/SlidesTemplate";
import "./index.css";
import { Intro } from "./Slides/Intro";

function App() {
  return (
    <div>
      <Deck>
        <SlideTemplate>1st slide</SlideTemplate>
        <SlideTemplate>2nd slide</SlideTemplate>
        <Intro />
      </Deck>
    </div>
  );
}

export default App;
