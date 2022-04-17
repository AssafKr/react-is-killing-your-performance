import "./index.css";
import { RecoilRoot } from "recoil";
import { Deck, ListItem, SlideTemplate, WithSteps } from "./components";
import { AboutMe } from "./slides";
import { Delarativeness } from "./slides/Delarativeness";
import { SectionTitle } from "./components/SectionTitle";
import Optimization from "./assets/xkcd-optimization.png";
import EpicHandshakeMeme from "./assets/epic-handshake.jpeg";
import { SlowComponent } from "./components/SlowComponent";
import { BigSubtitle } from "./components/BigSubtitle";
import { MemoExample } from "./components/MemoExample";
import { TheDOMTree } from "./slides/reconciliation-explained/TheDOMTree";
import { TheVDomTree } from "./slides/reconciliation-explained/TheVDOMTree";
import { Code } from "./components/Code";
import { WIPDom } from "./slides/reconciliation-explained/WIPDom";
function App() {
  return (
    <RecoilRoot>
      <Deck>
        <SectionTitle title="REACT IS KILLING YOUR PERFORMANCE AND IT'S YOUR FAULT 💀" />
        <AboutMe />
        <SectionTitle title="EXPOSITION" />
        <SlideTemplate>
          <h1>basic truth #1</h1>
          <BigSubtitle>
            🙅 no one likes <em>laggy UI</em>
          </BigSubtitle>
        </SlideTemplate>
        <SlideTemplate>
          <h1>basic truth #2</h1>
          <BigSubtitle>
            🙆 everyone loves <em>declarative UI frameworks</em>
          </BigSubtitle>
        </SlideTemplate>
        <SlideTemplate>
          <div className="flex flex-col justify-center items-center">
            <img src={EpicHandshakeMeme} className="h-[47vw]" />
          </div>
        </SlideTemplate>
        <Delarativeness />
        <SlideTemplate>
          <h1>it's a kind of magic ✨</h1>
          <WithSteps type="replace">
            <BigSubtitle>
              A simplistic overview of the <em>reconciliation algorithm</em>
            </BigSubtitle>
            <TheDOMTree />
            <TheVDomTree />
            <div className="ml-[21vw] mt-[21vw]">
              <Code>{`setCount((c) => c + 1) // now count = 1`}</Code>
            </div>
            <WIPDom />
            <BigSubtitle>
              this happens at <em>runtime</em>
            </BigSubtitle>
          </WithSteps>
        </SlideTemplate>
        <SlideTemplate>
          <h1>death by a thousand cuts</h1>
          <figure>
            <blockquote>
              The danger of defaulting to doing unnecessary work, even if that
              work is trivial, is that your app will eventually succumb to
              'death by a thousand cuts' with no clear bottleneck to aim at once
              it's time to optimise.
            </blockquote>
            <figcaption>
              Rich Harris -{" "}
              <a
                href="https://svelte.dev/blog/virtual-dom-is-pure-overhead"
                target="_blank"
              >
                https://svelte.dev/blog/virtual-dom-is-pure-overhead
              </a>
            </figcaption>
          </figure>
        </SlideTemplate>
        <SectionTitle title="AVOIDING DEATH 🏃‍♀️" />
        <SlideTemplate>
          <WithSteps type="replace">
            <div>
              <h1>
                YOU ARE <em>NOT</em> GOING TO DIE
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={Optimization} className="h-[47vw]" />
              <a>https://xkcd.com/1691/</a>
            </div>
          </WithSteps>
        </SlideTemplate>
        <SlideTemplate>
          <h1>
            YOU ARE <em>NOT</em> GOING TO DIE
          </h1>
          <ul>
            <WithSteps type="sequence">
              <ListItem content="are you running in dev mode?" />
              <SlowComponent />
            </WithSteps>
          </ul>
        </SlideTemplate>
        <SlideTemplate>
          <h1>
            YOU <em>ARE</em> GOING TO DIE
          </h1>
          <BigSubtitle>
            avoid <em>unnecessary</em> renders
          </BigSubtitle>
        </SlideTemplate>
        <SlideTemplate>
          <h1>React.memo</h1>
          <h2>
            if your component is "pure" you can wrap with with the React.memo
            HOC
          </h2>
          <WithSteps type="replace">
            <div>
              <h2>without memo:</h2>
              <MemoExample />
            </div>
            <div>
              <h2>with memo:</h2>
              <MemoExample withMemo />
            </div>
          </WithSteps>
        </SlideTemplate>
        
        <SectionTitle title="DEAL WITH THE CONSEQUENCES" />
      </Deck>
    </RecoilRoot>
  );
}

export default App;
