import tokens from '../tokens';

const baseStyle = {
  position: 'fixed',
  top: '0',
  width: `calc(100% - ${tokens.variables.asideWidth})`,
  height: '70px',
  marginLeft: `${tokens.variables.asideWidth}`,
  backgroundColor: 'hsla(0,0%,100%,.95)',
  borderBottom: `2px solid ${tokens.colors.divider}`,
  color: `${tokens.colors.primaryText}`,
  fontSize: '20px',
  fontWeight: 'bold',
  zIndex: `${tokens.zindex.positioner}`,
};

export default baseStyle;
