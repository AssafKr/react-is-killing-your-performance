import "./index.css";
import { Deck } from "./components";
import { AboutMe, Scope, Intro } from "./slides";
import { Delarativeness } from "./slides/Delarativeness";

function App() {
  return (
    <Deck>
      <Intro />
      <AboutMe />
      <Scope />
      <Delarativeness />
    </Deck>
  );
}

export default App;
