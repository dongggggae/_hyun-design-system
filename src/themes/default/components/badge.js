import tokens from '../tokens';

const baseStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '24px',
  padding: '1px 10px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: `${tokens.radius[4]}`,
  fontSize: '12px',
  lineHeight: '20px',
  fontFamily: 'inherit',
  textAlign: 'center',
};

const badgeTypes = {
  success: `${tokens.colors.green600}`,
  warn: `${tokens.colors.amber700}`,
  error: `${tokens.colors.red600}`,
  information: `${tokens.colors.navy600}`,
};

export default { baseStyle, badgeTypes };
