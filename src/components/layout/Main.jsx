import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledMain = styled.main`
  position: relative;
  margin-top: 70px;
  margin-left: 250px;
  padding: 20px 10px 0 30px;
`;

const Main = ({ children }) => {
  const PREFIX = 'Main';
  return <StyledMain className={PREFIX}>{children}</StyledMain>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
