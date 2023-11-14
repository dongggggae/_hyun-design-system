import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { defaultTheme } from '../../themes';
import '../../assets/app.css';

const MySidebar = () => {
  const StyledLink = styled(Link)`
    display: inline-block;
    width: 100%;
    height: 100%;
    color: ${defaultTheme.colors.tintColor};
    text-decoration: none;
  `;

  const StyledSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 250px;
    background-color: ${defaultTheme.colors.white};
    border-right: 1px solid ${defaultTheme.colors.purpleTint};
  `;

  const PREFIX = 'Sidebar';
  return (
    <StyledSidebar className={PREFIX}>
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
export default MySidebar;
