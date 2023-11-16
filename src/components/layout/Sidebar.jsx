import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';
import navData from '../../data/nav';

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
  color: ${(props) => props.theme.colors.link};
  text-decoration: none;
`;

const Sidebar = () => {
  const theme = useTheme();
  console.log(theme);
  const PREFIX = 'Sidebar';

  return (
    <StyledSidebar className={PREFIX} theme={theme}>
      <div className="p-40"></div>
      <nav>
        <ul>
          {navData.map((link, idx) => (
            <li key={idx}>
              <StyledLink to={link.to} theme={theme}>
                {link.name}
              </StyledLink>
            </li>
          ))}
        </ul>
      </nav>
    </StyledSidebar>
  );
};
export default Sidebar;
