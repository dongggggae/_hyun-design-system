// App.js
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import Layout from './layouts/Layout';
import ButtonPage from './pages/components/ButtonPage';
import TypographyPage from './pages/components/TypographyPage';
import ColorPage from './pages/components/ColorPage';
import IconPage from './pages/components/IconPage';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="components/ButtonPage" element={<ButtonPage />} />
          <Route path="components/TypographyPage" element={<TypographyPage />} />
          <Route path="components/ColorPage" element={<ColorPage />} />
          <Route path="components/IconPage" element={<IconPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
