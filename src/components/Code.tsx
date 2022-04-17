import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeStyleNoBackground = {
  ...codeStyle,
  hljs: { ...codeStyle.hljs, background: "none" },
};

export const Code: React.FC<
  Pick<SyntaxHighlighter["props"], "language"> & { className?: string }
> = ({ language = "typescript", children }) => {
  return (
    <SyntaxHighlighter
      classNa
      language={language}
      style={codeStyleNoBackground}
    >
      {children}
    </SyntaxHighlighter>
  );
};
