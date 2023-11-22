import tokens from '../tokens';

const baseStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '24px',
  padding: '1px 8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: `${tokens.radius[4]}`,
  color: `${tokens.colors.white}`,
  fontSize: '14px',
  lineHight: '20px',
  fontFamily: 'inherit',
  textAlign: 'center',
};

const badgeTypes = {
  success: {
    backgroundColor: `${tokens.colors.green600}`,
  },
  warn: {
    backgroundColor: `${tokens.colors.amber700}`,
  },
  error: {
    backgroundColor: `${tokens.colors.red600}`,
  },
  information: {
    backgroundColor: `${tokens.colors.navy600}`,
  },
};

export default { baseStyle, badgeTypes };
