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
        <SlideTemplate>
          <h1>be careful not to use memo with children</h1>
        </SlideTemplate>
        <SlideTemplate>
          <h1>step outside the reconciliation</h1>
        </SlideTemplate>
        <SectionTitle title="DEAL WITH THE CONSEQUENCES" />
      </Deck>
    </RecoilRoot>
  );
}

export default App;
