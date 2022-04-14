import { SlideTemplate } from "../components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Component = () => {
  const codeString = "(num) => num + 1";
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};
// We need to emphsize here the the declerativeness of React is 
// from state changes. Need an example that changes the state
export function Delarativeness() {
  return (
    <SlideTemplate>
      <h1>Declerativeness</h1>
      <div className="flex flex-col w-full justify-between">
        <div className="mb-[5vw]">
          <h3>Declerative:</h3>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
cosnt Todos = ({todos}) => {
  return todos.map(todo => <li>todo.content</li>)
}
`}
          </SyntaxHighlighter>
        </div>
        <div>
          <h3>Imperative:</h3>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`
const todos = []
function addTodo(todo) {

}
`}
          </SyntaxHighlighter>
        </div>
      </div>
    </SlideTemplate>
  );
}
