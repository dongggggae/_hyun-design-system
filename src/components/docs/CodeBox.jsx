import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBox = () => {
  const codeString = 'const export = () => {<SyntaxHighlighter language="jsx" style={dark}>{codeString}</SyntaxHighlighter>};';

  return (
    <SyntaxHighlighter language="jsx" style={materialDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};
export default CodeBox;
