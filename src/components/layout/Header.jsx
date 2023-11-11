import styled from '@emotion/styled';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  border-bottom: 2px solid #091e4224;
  z-index: 99;
`;

const Header = () => {
  const PREFIX = 'Header';
  return (
    <StyledHeader className={PREFIX}>
      <div className="HeaderInner">HEADER</div>
    </StyledHeader>
  );
};
export default Header;
