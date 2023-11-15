import tokens from '../tokens';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  width: `${tokens.variables.asideWidth}`,
  backgroundColor: `${tokens.colors.surface}`,
  borderRight: `2px solid ${tokens.colors.divider}`,
  zIndex: `${tokens.zindex.layouts}`,
};

export default baseStyle;
