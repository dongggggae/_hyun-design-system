import styled from '@emotion/styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeContainer = () => {
  const codeString = 'const export = () => {<SyntaxHighlighter language="jsx" style={dark}>{codeString}</SyntaxHighlighter>};';

  const StyledPreview = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 32px;
    background-color: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    color: #333;
  `;

  return (
    <div className="CodeContainer">
      <StyledPreview>해당 코드에 대한 Content가 표시 될 예정입니다.</StyledPreview>
      <div className="CodeBox">
        <SyntaxHighlighter language="jsx" style={materialDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeContainer;
