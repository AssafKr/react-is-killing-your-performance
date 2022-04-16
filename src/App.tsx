import "./index.css";
import { RecoilRoot } from "recoil";
import { Deck, ListItem, SlideTemplate } from "./components";
import { AboutMe, Scope, Intro } from "./slides";
import { Delarativeness } from "./slides/Delarativeness";
import { SectionTitle } from "./components/SectionTitle";

function App() {
  return (
    <RecoilRoot>
      <Deck>
        <Intro />
        <AboutMe />
        <SectionTitle title="WHAT IS THIS ABOUT?" />
        <SlideTemplate>
          <h1>basic truth #1</h1>
          <h2>
            🙅 no one likes <em>laggy UI</em>
          </h2>
        </SlideTemplate>
        <SlideTemplate>
          <h1>basic truth #2</h1>
          <h2>
            🙆 everyone loves <em>declarative programming</em>
          </h2>
        </SlideTemplate>
        <Delarativeness />
        <SlideTemplate>
          <h1>🧙‍♀️ How does this magic happen</h1>
          <h2>Reconcilliation</h2>
        </SlideTemplate>
        <SlideTemplate>
          <h1>reconciliation</h1>
          <ul>
            <ListItem content="state changes → compute new (vitual) UI → compare new with the old → apply the diff on the host's UI api" />
            <ListItem content="As efficient as it is, it's overhead. CPU is working" />
          </ul>
        </SlideTemplate>
        <SlideTemplate>
          <h1>Death by a thousand cuts</h1>
          <figure>
            <blockquote>
              The danger of defaulting to doing unnecessary work, even if that
              work is trivial, is that your app will eventually succumb to
              'death by a thousand cuts' with no clear bottleneck to aim at once
              it's time to optimise.
            </blockquote>
            <figcaption>
              Rich Harris - https://svelte.dev/blog/virtual-dom-is-pure-overhead
            </figcaption>
          </figure>
        </SlideTemplate>
        <SectionTitle title="AVOIDING DEATH ☠️" />
      </Deck>
    </RecoilRoot>
  );
}

export default App;
