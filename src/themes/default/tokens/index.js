import colors from './colors';
import variables from './variables';
import fills from './fills';
import radius from './radius';
import shadows from './shadows';
import state from './stats';
import typography from './typography';
import zindex from './zindex';

const tokens = {
  colors,
  variables,
  fills,
  radius,
  shadows,
  state,
  ...typography,
  zindex,
};

export default tokens;
