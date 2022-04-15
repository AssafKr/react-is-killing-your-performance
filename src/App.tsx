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
        <SlideTemplate>
          <div className="w-full h-full flex flex-col justify-center items-center ">
            <h1 className="font-aachen title-slide">WHAT IS THIS ABOUT?</h1>
          </div>
        </SlideTemplate>
      </Deck>
    </RecoilRoot>
  );
}

export default App;
