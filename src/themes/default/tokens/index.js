import colors from './colors';
import fills from './fills';
import radius from './radius';
import shadows from './shadows';
import typography from './typography';
import zindex from './zindex';

const tokens = {
  colors,
  fills,
  radius,
  shadows,
  ...typography,
  zindex,
};

export default tokens;
