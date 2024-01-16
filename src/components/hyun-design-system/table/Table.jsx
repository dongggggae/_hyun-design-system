import PropTypes from 'prop-types';

const Table = ({ children, hover, caption }) => {
  const PREFIX = 'table';

  return (
    <table className={hover ? [PREFIX, `${PREFIX}--hover`].join(' ') : PREFIX}>
      <caption>{caption}</caption>
      {children}
    </table>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  hover: PropTypes.bool,
  caption: PropTypes.string,
};

export default Table;
