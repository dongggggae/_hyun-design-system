import React from 'react';
import { defaultTheme } from '../../themes';

const ThemeContext = React.createContext(defaultTheme);
const { Consumer: ThemeConsumer, Provider: ThemeProvider } = ThemeContext;

const getThemeContext = () => ThemeContext;

export default ThemeContext;
export { getThemeContext, ThemeConsumer, ThemeProvider };
