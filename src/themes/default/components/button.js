import tokens from '../tokens';

const baseStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  fontFamily: 'inherit',
  textAlign: 'center',
  boxSizing: 'border-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: `${tokens.radius[2]}`,
  userSelect: 'none',
  boxShadow: 'none',
  outline: 'none',
  cursor: 'pointer',
};

const iconButtonStyle = {
  gap: '0',
  backgroundColor: `transparent`,
  borderColor: 'transparent',
  zIndex: `${tokens.zindex.foucsed}`,
};

const buttonTypes = {
  solidGreen: {
    backgroundColor: `${tokens.colors.green}`,
    borderColor: 'transparent',
    color: `${tokens.colors.white}`,
  },
  solidRed: {
    backgroundColor: `${tokens.colors.red}`,
    borderColor: 'transparent',
    color: `${tokens.colors.white}`,
  },
  outlineGreen: {
    backgroundColor: 'transparent',
    borderColor: `${tokens.colors.green}`,
    color: `${tokens.colors.green}`,
  },
  outlineGray: {
    backgroundColor: 'transparent',
    borderColor: `${tokens.colors.gray400}`,
    color: `${tokens.colors.black}`,
  },
};

const iconButtonSizes = {
  md: {
    padding: '11px',
  },
  sm: {
    padding: '5px',
  },
  xs: {
    padding: '3px',
  },
};

const buttonSizes = {
  lg: {
    height: '56px',
    paddingRight: '18px',
    paddingLeft: '18px',
    fontSize: '16px',
    lineHeight: '24px',
  },
  md: {
    height: '48px',
    paddingRight: '14px',
    paddingLeft: '14px',
    fontSize: '14px',
    lineHeight: '24px',
  },
  sm: {
    height: '32px',
    paddingRight: '10px',
    paddingLeft: '10px',
    fontSize: '14px',
    lineHeight: '24px',
  },
  xs: {
    height: '24px',
    paddingRight: '6px',
    paddingLeft: '6px',
    fontSize: '12px',
    lineHeight: '20px',
  },
};

export default { baseStyle, iconButtonStyle, buttonSizes, iconButtonSizes, buttonTypes };
