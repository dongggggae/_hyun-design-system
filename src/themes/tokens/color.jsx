const colorScales = {
  // gray
  white: '#fff',
  gray100: '#fafafa ',
  gray200: '#f2f2f2 ',
  gray300: '#e8e8e8 ',
  gray400: '#dfdfdf ',
  gray500: '#b7b7b7 ',
  gray600: '#777 ',
  gray700: '#555 ',
  gray800: '#111 ',
  black: '000',

  // blue
  blue50: '#eaf5ff ',
  blue100: '#c2e3ff ',
  blue200: '#9ad0ff ',
  blue300: '#5badff ',
  blue400: '#2d89ff ',
  blue500: '#1067ff ',
  blue600: '#054ce2 ',
  blue700: '#0034bf ',
  blue800: '#002198 ',
  blue900: '#051671 ',

  // navy
  navy50: '#d9e6fd',
  navy100: '#b4cbfc',
  navy200: '#8dacf6',
  navy300: '#6e91ec',
  navy400: '#4169e1',
  navy500: '#2f50c1',
  navy600: '#1f3bb3',
  navy700: '#142782',
  navy800: '#0c1a6c',
  navy900: '#1e283d',

  // tint
  grayTint: '#f7f9fb',
  grayblueTint: '#f3f7fd',
  greenTint: '#e6f9cb',
  bluegreenTint: '#d7fbf6',
  blueTint: '#e9f4ff',
  purpleTint: '#e7e7ff',
  redTint: '#ffe4e4',
  orangeTint: '#ffead2',
  yellowTint: '#f8f6c5',

  // varidate
  default: '#2952CC',
  positive: '#317159 ',
  caution: '#FFB020 ',
  negative: '#D14343',
};

const colors = {
  ...colorScales,

  muted: colorScales.gray400,
  default: colorScales.gray800,
  selected: colorScales.default,
  surface: colorScales.white,
  overlay: 'rgba(67, 90, 111, 0.7)',
};
export default colors;
