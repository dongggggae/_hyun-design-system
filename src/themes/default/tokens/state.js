import colors from './colors';

const state = {
  success: {
    background: colors.greenTint,
    boreder: colors.positive,
    text: colors.positive,
    icon: colors.positive,
  },
  warning: {
    background: colors.orangeTint,
    boreder: colors.caution,
    text: colors.caution,
    icon: colors.caution,
  },
  danger: {
    background: colors.orangeTint,
    boreder: colors.negative,
    text: colors.negative,
    icon: colors.negative,
  },
};

export default state;
