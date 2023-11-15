import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { defaultTheme } from '../../themes';
import { useTheme } from '../../theme/ThemeContext';
import '../../assets/app.css';

const StyledSidebar = styled.aside`
  ${(props) => props.theme.components.sidebar}
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: ${defaultTheme.colors.primaryText};
  text-decoration: none;
`;

const Sidebar = () => {
  const theme = useTheme();
  const PREFIX = 'Sidebar';

  return (
    <StyledSidebar className={PREFIX} theme={theme}>
      <div className="p-40"></div>
      <nav>
        <ul>
          <li>
            <StyledLink to="/components/Btn">Button</StyledLink>
          </li>
          <li>
            <StyledLink to="/components/Typography">Typography</StyledLink>
          </li>
          <li>
            <StyledLink to="/components/Colors">Color</StyledLink>
          </li>
        </ul>
      </nav>
    </StyledSidebar>
  );
};
export default Sidebar;
