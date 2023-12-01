import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { useItem } from './Item';
import { useTheme } from '../../../theme/ThemeContext';

const StyledBody = styled.div`
  ${(props) => props.theme.components.accordion.accordionBodyStyle}
  ${(props) => props.collapsed && props.theme.components.accordion.collapsedBodyStyle}
`;

const Body = ({ children }) => {
  const theme = useTheme();
  const { state } = useItem();

  return (
    <StyledBody theme={theme} collapsed={state.collapsed}>
      {children}
    </StyledBody>
  );
};

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
