import styled from '@emotion/styled';
import { defaultTheme } from '../../themes';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: calc(100% - 250px);
  height: 70px;
  margin-left: 250px;
  background-color: #ffffff;
  border-bottom: 1px solid ${defaultTheme.colors.purpleTint};
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
