import { SlideTemplate, WithSteps } from "../components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Example:</h2>
      <div className="flex flex-col justify-center items-center">
        <p className="mb-[4vw]">count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>count++</button>
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
  button.onclick = () => {
    count += 1;
    p.innerText = `count: ${count}`;
  };
}

const codeStyleNoBackground = {
  ...codeStyle,
  hljs: { ...codeStyle.hljs, background: "none" },
};

export function Delarativeness() {
  console.log(codeStyle, codeStyleNoBackground);
  return (
    <SlideTemplate>
      <h1>declerativeness</h1>
      <div className="flex flex-col w-full justify-between">
        <WithSteps type="replace">
          <Counter />
          <h2>Imperative implementation:</h2>
          <>
            <SyntaxHighlighter
              language="typescript"
              style={codeStyleNoBackground}
            >
              {`function Counter(parentElement) {
  const p = document.createElement("p");
  parentElement.appendChild(p);
  const button = document.createElement("button");
  button.innerText = "count++";
  parentElement.appendChild(button);
  let count = 0;
  p.innerText = \`count: \${count}\`;
  button.onclick = () => {
    count += 1;
    p.innerText = \`count: \${count}\`;
  };
}
`}
            </SyntaxHighlighter>
          </>
          <h2>Declerative implementation:</h2>
          <>
            <SyntaxHighlighter language="tsx" style={codeStyleNoBackground}>
              {`const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>click me!</button>
    </>
  );
};
`}
            </SyntaxHighlighter>
          </>
        </WithSteps>
      </div>
    </SlideTemplate>
  );
}
