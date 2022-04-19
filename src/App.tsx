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
import { FiberExplained } from "./slides/fiber-explained/FilterExplained";
import { FiberExample } from "./components/examples/FiberExample";

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
        <FiberExplained />
        <SlideTemplate>
          <h1>React 18 new hooks</h1>
          <WithSteps>
            <ListItem>
              the brand new React 18 introduces ways to render with different
              priority
            </ListItem>
            <ListItem>
              triggering a render using normal <em>setState</em> is high
              priority
            </ListItem>
            <ListItem>
              use <em>startTransition</em> or <em>useDeferredValue</em> for low
              priority
            </ListItem>
          </WithSteps>
        </SlideTemplate>
        <FiberExample />
        <SlideTemplate>
          <h1 className="text-[5vw] my-[2vw]">
            startTransition vs useDeferredValue
          </h1>
          <WithSteps>
            <ListItem>
              both achieve the same goal: delaying rendering of part of the tree
            </ListItem>
            <ListItem>
              <em>useDeferredValue</em> is for values, you can use it when
              receiving data from the parent, or from a previous hook
            </ListItem>
            <ListItem>
              <em>startTransition</em> is wrapped around a high-priority trigger
              (<em>setState</em>) to make that trigger low-priority
            </ListItem>
          </WithSteps>
        </SlideTemplate>
        <SlideTemplate>
          <h1 className="text-[5vw] my-[2vw]">compared to debounce/throttle</h1>
          <WithSteps>
            <ListItem>
              low priority updates are delayed only if necessary
            </ListItem>
            <ListItem>
              debounce/throttle will always be applied, leading to bad
              experience when the rendering is actually fast
            </ListItem>
            <ListItem>React Fiber "knows" when to delay renders</ListItem>
          </WithSteps>
        </SlideTemplate>
        <SlideTemplate>
          <h1 className="text-[5vw] my-[2vw]">compared to debounce/throttle</h1>
          <WithSteps>
            <ListItem>React's runtime has an overhead</ListItem>
            <ListItem>
              most of the times you don't need to worry about it.
            </ListItem>
            <ListItem>if you do: avoid render calls</ListItem>
            <ListItem>if you can't: let go of declarativeness</ListItem>
            <ListItem>
              if that doesn't help: <em>useDeferredValue</em>/
              <em>startTransition</em>
            </ListItem>
          </WithSteps>
        </SlideTemplate>
        <SectionTitle title="THANK YOU 🙏" />
      </Deck>
    </RecoilRoot>
  );
}

export default App;
