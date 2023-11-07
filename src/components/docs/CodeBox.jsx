import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBox = () => {
  const codeString = 'const export = () => {<SyntaxHighlighter language="jsx" style={dark}>{codeString}</SyntaxHighlighter>};';

  return (
    <SyntaxHighlighter language="jsx" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};
export default CodeBox;
