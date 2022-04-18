import "./index.css";
import { RecoilRoot } from "recoil";
import {
  AboutMe,
  DeathByAThousandCuts,
  WhatIsDeclarativeness,
  Memo,
  ReconciliationExplained,
  DevMode,
  SeparateStatefulComponents,
  UseTheChildrenProp,
  StepOutside,
  StepOutsideFinalExample,
} from "./slides";
import Optimization from "./assets/xkcd-optimization.png";
import EpicHandshakeMeme from "./assets/epic-handshake.jpeg";

import { Deck, WithSteps } from "./components/deck";
import {
  SectionTitle,
  SlideTemplate,
  ListItem,
  BigSubtitle,
} from "./slides/common";
import { WhyNotReactive } from "./slides/why-not-reactive/WhyNotReactive";

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
        <SlideTemplate>
          <h1>wdym by declarativeness?</h1>
          <WithSteps>
            <ListItem>HTML + CSS are already declarative</ListItem>
            <ListItem>we're talking about state</ListItem>
          </WithSteps>
        </SlideTemplate>
        <WhatIsDeclarativeness />
        <ReconciliationExplained />
        <DeathByAThousandCuts />
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
        <DevMode />
        <SlideTemplate>
          <h1>
            YOU <em>ARE</em> GOING TO DIE
          </h1>
          <WithSteps>
            <ListItem>
              avoid <em>unnecessary</em> renders
            </ListItem>
            <ListItem>how to do that?</ListItem>
          </WithSteps>
          <BigSubtitle></BigSubtitle>
        </SlideTemplate>
        <Memo />
        <SeparateStatefulComponents />
        <UseTheChildrenProp />
        <StepOutside />
        <StepOutsideFinalExample />
        <SectionTitle title="EMBRACE DEATH" />
        <SlideTemplate>
          <h1>sometimes, you can't avoid renders</h1>
          <ul>
            <ListItem>
              some complex UI have rapidly changing parts, and lots of them
            </ListItem>
            <ListItem>is there anything we can do to improve the UX?</ListItem>
          </ul>
        </SlideTemplate>
        <SlideTemplate>
          <h1>how did we get here, anyway?</h1>
          <ul>
            <ListItem>
              all of the optimizations discussed above are a consequence of
              React's way to achieve declerativeness
            </ListItem>
            <ListItem>but it doesn't have to be this way</ListItem>
          </ul>
        </SlideTemplate>
        <SlideTemplate>
          <h1>pull vs push</h1>
          <ul>
            <ListItem>
              React's reconciliation is pull based - it recalculates the tree
              every time the state changes
            </ListItem>
            <ListItem>there's another way - push based updates</ListItem>
            <ListItem>
              components subscribe to state changes, and re-render accordingly
            </ListItem>
            <ListItem>
              another name for push based updates is "reactive"
            </ListItem>
          </ul>
        </SlideTemplate>
        <SlideTemplate>
          <h1>React is not... reactive?!</h1>
          <WithSteps>
            <ListItem>
              reactive programming is a way to declaratively subscribe to events
              (state changes) and acts accordingly
            </ListItem>
            <ListItem>examples: Excel, MobX, RxJS</ListItem>
            <ListItem>reactive UI frameworks: Svelte, Solid.js</ListItem>
          </WithSteps>
        </SlideTemplate>
        <WhyNotReactive />
        <SlideTemplate>
          <h1>React fiber</h1>
          <ul>
            <ListItem>
              since React 16 the reconciliation algorithm has been rewritten
            </ListItem>
            <ListItem>
              it now allows for asynchronous rendering of the VDOM
            </ListItem>
          </ul>
        </SlideTemplate>
        <SlideTemplate>overview of the algorithm</SlideTemplate>
        <SlideTemplate>
          the api (triggering low-priority renders
          setTransition/useDeferredValue)
        </SlideTemplate>
        <SlideTemplate>
          demo with useDeferredValue (don't forget to mention useMemo)
        </SlideTemplate>
        <SlideTemplate>compared to debounce/throttle</SlideTemplate>
        <SlideTemplate>summary</SlideTemplate>
        <SlideTemplate>thanks!</SlideTemplate>
      </Deck>
    </RecoilRoot>
  );
}

export default App;
