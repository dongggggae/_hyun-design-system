import { FaAngleLeft, FaAngleRight, FaAngleUp, FaAngleDown, FaXmark, FaRegCircleXmark, FaPlus, FaMagnifyingGlass, FaBars, FaEye, FaEyeSlash, FaRotateRight, FaGear } from 'react-icons/fa6';

const baseStyle = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const iconTypes = {
  arrowLeft: FaAngleLeft,
  arrowRight: FaAngleRight,
  arrowUp: FaAngleUp,
  arrowDown: FaAngleDown,
  close: FaXmark,
  closeFill: FaRegCircleXmark,
  plus: FaPlus,
  search: FaMagnifyingGlass,
  hamburger: FaBars,
  visible: FaEye,
  unvisible: FaEyeSlash,
  refresh: FaRotateRight,
  system: FaGear,
};

const iconSizes = {
  lg: {
    width: '24px',
    height: '24px',
  },
  md: {
    width: '20px',
    height: '20px',
  },
  sm: {
    width: '16px',
    height: '16px',
  },
};

export default { baseStyle, iconTypes, iconSizes };
