import "./index.css";
import { RecoilRoot } from "recoil";
import { Deck, SlideTemplate } from "./components";
import { AboutMe, Scope, Intro } from "./slides";
import { Delarativeness } from "./slides/Delarativeness";

function App() {
  return (
    <RecoilRoot>
      <Deck>
        <Intro />
        <AboutMe />
        <Scope />
        <Delarativeness />
        <SlideTemplate>
          <h1>How does this magic happens 🧙‍♀️</h1>
          <h2>Reconcilliation</h2>
        </SlideTemplate>
      </Deck>
    </RecoilRoot>
  );
}

export default App;
