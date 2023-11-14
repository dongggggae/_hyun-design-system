import tokens from '../tokens';

const baseStyle = {
  position: 'fixed',
  top: '0',
  width: `calc(100% - ${tokens.variables.asideWidth})`,
  height: '70px',
  marginLeft: `${tokens.variables.asideWidth}`,
  backgroundColor: `${tokens.colors.white}`,
  borderBottom: `1px solid ${tokens.colors.purpleTint}`,
  zIndex: `${tokens.zindex.positioner}`,
};

export default baseStyle;
