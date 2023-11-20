import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import navData from '../../data/nav';
import { useTheme } from '../../theme/ThemeContext';

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.link};
  text-decoration: none;
`;

const LayoutSidebar = () => {
  const theme = useTheme();
  const PREFIX = 'Sidebar';

  return (
    <aside className={PREFIX}>
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
    </aside>
  );
};
export default LayoutSidebar;
