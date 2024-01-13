import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ children, link }) => {
  const PREFIX = 'card';

  return (
    <Link className={PREFIX} to={link}>
      {children}
    </Link>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
};

export default Card;
