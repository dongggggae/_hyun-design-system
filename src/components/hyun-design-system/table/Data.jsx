import PropTypes from 'prop-types';

const Data = ({ children, rowSpan, colSpan, active }) => {
  const attributes = {};

  attributes.rowSpan = rowSpan || attributes.rowSpan;
  attributes.colSpan = colSpan || attributes.colSpan;

  return (
    <td className={active ? 'active' : null} {...attributes}>
      {children}
    </td>
  );
};

Data.propTypes = {
  children: PropTypes.node.isRequired,
  rowSpan: PropTypes.number,
  colSpan: PropTypes.number,
  active: PropTypes.bool,
};

export default Data;
