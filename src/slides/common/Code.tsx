import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark as codeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FCC } from "../../types";

const codeStyleNoBackground = {
  ...codeStyle,
  hljs: { ...codeStyle.hljs, background: "none" },
};

export const Code: FCC<
  Pick<SyntaxHighlighter["props"], "language"> & { className?: string }
> = ({ language = "typescript", className, children }) => {
  return (
    <SyntaxHighlighter
      className={className}
      language={language}
      style={codeStyleNoBackground}
    >
      {children}
    </SyntaxHighlighter>
  );
};
