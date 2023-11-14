import { ThemeContext } from '@emotion/react';
import { useContext } from 'react';

function useTheme() {
  return useContext(ThemeContext);
}

export default useTheme;
