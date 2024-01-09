import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaAngleDown,
  FaXmark,
  FaRegCircleXmark,
  FaPlus,
  FaMagnifyingGlass,
  FaBars,
  FaEye,
  FaEyeSlash,
  FaRotateRight,
  FaGear,
} from 'react-icons/fa6';

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
  invisible: FaEyeSlash,
  refresh: FaRotateRight,
  system: FaGear,
};

const iconNames = {
  arrowLeft: '왼쪽 화살표',
  arrowRight: '오른쪽 화살표',
  arrowUp: '위쪽 화살표',
  arrowDown: '아래쪽 화살표',
  close: '닫기',
  closeFill: '지우기',
  plus: '더하기',
  search: '검색하기',
  hamburger: '메뉴',
  visible: '보기',
  invisible: '숨기기',
  refresh: '새로고침',
  system: '설정',
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

export default { baseStyle, iconTypes, iconNames, iconSizes };
