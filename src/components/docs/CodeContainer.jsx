import React from 'react';

import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeContainer = React.memo(({ codeString }) => {
  return (
    <div className="code__container">
      <SyntaxHighlighter language="jsx" style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
});

CodeContainer.propTypes = {
  codeString: PropTypes.string.isRequired,
};

CodeContainer.displayName = 'CodeContainer';

export default CodeContainer;
