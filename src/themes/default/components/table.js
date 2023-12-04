import typography from './typography';
import tokens from '../tokens';

const baseStyle = {
  width: '100%',
  backgroundColor: `${tokens.colors.white}`,
  color: `${tokens.colors.secondaryText}`,
  borderWidth: '1px',
  borderColor: `${tokens.colors.divider}`,
  borderStyle: 'solid',
  boxSizing: 'border-box',
  textAlign: 'center',
  ...typography.textSizes.md,
};

const dataStyle = {
  padding: '10px 8px',
  borderLeft: `1px solid ${tokens.colors.divider}`,
  borderBottom: `1px solid ${tokens.colors.divider}`,
  verticalAlign: 'middle',
};

const headerStyle = {
  padding: '10px 8px',
  borderLeft: `1px solid ${tokens.colors.divider}`,
  borderBottom: `1px solid ${tokens.colors.divider}`,
  fontWeight: '700',
  verticalAlign: 'middle',
};

const activeRowStyle = {
  backgroundColor: `${tokens.colors.divider}`,
};

export default { baseStyle, dataStyle, headerStyle, activeRowStyle };
