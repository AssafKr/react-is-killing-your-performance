import "./index.css";
import { Deck, SlideTemplate } from "./components";
import { AboutMe, Scope, Intro } from "./slides";
import { Delarativeness } from "./slides/Delarativeness";

function App() {
  return (
    <Deck>
      {(start, finish) => (
        <>
          <Intro onStart={start} onFinish={finish} />
          <AboutMe />
          <Scope />
          <Delarativeness />
          <SlideTemplate>
            <h1>How does this magic happens 🧙‍♀️</h1>
            <h2>Reconcilliation</h2>
          </SlideTemplate>
        </>
      )}
    </Deck>
  );
}

export default App;
