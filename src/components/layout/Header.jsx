import styled from '@emotion/styled';
import Heading from '../hyun-design-system/typography/Heading';
import { useTheme } from '../../theme/ThemeContext';

const StyledHeader = styled.header`
  ${(props) => props.theme.components.header}
`;

const Header = () => {
  const theme = useTheme();
  const PREFIX = 'Header';

  return (
    <StyledHeader className={PREFIX} theme={theme}>
      <div className="HeaderInner">
        <Heading as="h2" size={3} text="HEADER" />
      </div>
    </StyledHeader>
  );
};
export default Header;
