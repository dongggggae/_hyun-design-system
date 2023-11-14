import colors from './colors';
import fills from './fills';
import radius from './radius';
import shadows from './shadows';
import state from './stats';
import typography from './typography';
import zindex from './zindex';

const tokens = {
  colors,
  fills,
  radius,
  shadows,
  state,
  ...typography,
  zindex,
};

export default tokens;
