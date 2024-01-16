import PropTypes from 'prop-types';

const Header = ({ children, rowSpan, colSpan, active }) => {
  const attributes = {};

  attributes.rowSpan = rowSpan || attributes.rowSpan;
  attributes.colSpan = colSpan || attributes.colSpan;

  return (
    <th className={active ? 'active' : null} {...attributes}>
      {children}
    </th>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  rowSpan: PropTypes.number,
  colSpan: PropTypes.number,
  active: PropTypes.bool,
};

export default Header;
