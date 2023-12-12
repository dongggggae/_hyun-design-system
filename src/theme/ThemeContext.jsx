import { createContext, useContext } from 'react';

import PropTypes from 'prop-types';

import { defaultTheme } from '../themes';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
