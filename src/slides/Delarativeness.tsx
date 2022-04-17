import { SlideTemplate, WithSteps } from "../components";
import { useState } from "react";
import { Code } from "../components/Code";

const Counter = () => {
  const [count, setCount] = useState(0);
  const isCountEven = count % 2 === 0;

  return (
    <>
      <h2>Example:</h2>
      <div className="flex flex-row justify-start items-center mt-[4vw]">
        <button onClick={() => setCount((c) => c + 1)}>count++</button>
        <p className="mx-[4vw]">count: {count}</p>
        {isCountEven ? <p>count is even! 🎉</p> : null}
      </div>
    </>
  );
};

function ImperativeCounter(parentElement: HTMLDivElement) {
  const p = document.createElement("p");
  parentElement.appendChild(p);

  const button = document.createElement("button");
  button.innerText = "count++";
  parentElement.appendChild(button);

  let count = 0;
  p.innerText = `count: ${count}`;

  const isEvenP = document.createElement("p");
  isEvenP.innerText = "count is even! 🎉";

  button.onclick = () => {
    count += 1;
    p.innerText = `count: ${count}`;
    if (count % 2 == 0) {
      parentElement.appendChild(isEvenP);
    } else if (parentElement.lastElementChild === isEvenP) {
      parentElement.removeChild(isEvenP);
    }
  };
}

export function Delarativeness() {
  return (
    <SlideTemplate>
      <h1>declerativeness</h1>
      <div className="flex flex-col w-full justify-between">
        <WithSteps type="replace">
          <Counter />
          <h2>Imperative implementation:</h2>
          <Code>
            {`function Counter(parentElement) {
  const p = document.createElement("p");
  parentElement.appendChild(p);
  const button = document.createElement("button");
  button.innerText = "count++";
  parentElement.appendChild(button);
  let count = 0;
  p.innerText = \`count: $\{count}\`;
  const confettiMessage = document.createElement("p");
  confettiMessage.innerText = "count is even! 🎉";
  parentElement.appendChild(confettiMessage)
`}
          </Code>
          <Code>
            {`  button.onclick = () => {
    count += 1;
    p.innerText = \`count: $\{count}\`;
    if (parentElement.lastElementChild !== confettiMessage && count % 2 == 0) {
      parentElement.appendChild(confettiMessage);
    } else if (parentElement.lastElementChild === confettiMessage) {
      parentElement.removeChild(confettiMessage);
    }
  };
}`}
          </Code>
          <h2>Declerative implementation:</h2>
          <>
            <Code language="tsx">
              {`const Counter = () => {
  const [count, setCount] = useState(0);
  const isCountEven = count % 2 === 0;

  return (
    <>
        <button onClick={() => setCount((c) => c + 1)}>count++</button>
        <p className="mx-[4vw]">count: {count}</p>
        {isCountEven ? <p>count is even! 🎉</p> : null}
    </>
  );
`}
            </Code>
          </>
        </WithSteps>
      </div>
    </SlideTemplate>
  );
}
