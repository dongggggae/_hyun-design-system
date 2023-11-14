import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeContainer = ({ codeString }) => {
  return (
    <div className="CodeContainer">
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

CodeContainer.propTypes = {
  codeString: PropTypes.string.isRequired,
};
export default CodeContainer;
