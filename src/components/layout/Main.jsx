import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledMain = styled.main`
  position: relative;
  margin-top: 70px;
  margin-left: 250px;
  padding: 20px 0 0 15px;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
