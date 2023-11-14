import styled from '@emotion/styled';
import { useTheme } from '../../theme/ThemeContext';

const StyledHeader = styled.header`
  ${(props) => props.theme.components.header}
`;

const Header = () => {
  const theme = useTheme();

  const PREFIX = 'Header';

  return (
    <StyledHeader className={PREFIX} theme={theme}>
      <div className="HeaderInner">HEADER</div>
    </StyledHeader>
  );
};
export default Header;
