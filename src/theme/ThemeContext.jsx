import { createContext, useContext } from 'react';
import { defaultTheme } from '../themes';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node, // Change the prop type to PropTypes.node
};
