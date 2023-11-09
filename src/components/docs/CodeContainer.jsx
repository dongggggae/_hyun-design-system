import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeContainer = ({ codeString }) => {
  return (
    <div className="CodeContainer">
      <SyntaxHighlighter language="jsx" style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

CodeContainer.propTypes = {
  codeString: PropTypes.string.isRequired,
};
export default CodeContainer;
