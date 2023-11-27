import tokens from '../tokens';

const accordionHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: '16px',
  backgroundColor: `${tokens.colors.white}`,
  border: 'none',
  borderBottom: `1px solid ${tokens.colors.divider}`,
  color: `${tokens.colors.primaryText}`,
  fontSize: 'inherit',
  lineHeight: 'inherit',
  cursor: 'pointer',
  overflowAnchor: 'none',
};

const accordionBodyStyle = {
  display: 'none',
  padding: '16px',
  backgroundColor: `${tokens.colors.gray100}`,
  color: `${tokens.colors.secondaryText}`,
  fontSize: 'inherit',
  lineHeight: 'inherit',
};

const accordionItemStyle = {
  fontSize: '16px',
  lineHeight: '24px',
};

const collapsedHeaderStyle = {
  borderBottom: `1px solid ${tokens.colors.black}`,
};

const collapsedBodyStyle = {
  display: 'block',
  borderBottom: `1px solid ${tokens.colors.divider}`,
};

export default { accordionHeaderStyle, accordionBodyStyle, accordionItemStyle, collapsedHeaderStyle, collapsedBodyStyle };
