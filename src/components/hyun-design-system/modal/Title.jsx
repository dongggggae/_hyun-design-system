import PropTypes from 'prop-types';

import Heading from '../typography/Heading';

const Title = ({ children }) => {
  return <Heading as={'h4'} size={'4'} text={children} />;
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
