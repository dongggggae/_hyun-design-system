import { Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import BadgePage from './pages/components/BadgePage';
import ButtonPage from './pages/components/ButtonPage';
import InputPage from './pages/components/forms/InputPage';
import SelectPage from './pages/components/forms/SelectPage';
import SwitchPage from './pages/components/forms/SwitchPage';
import ColorPage from './pages/components/foundation/ColorPage';
import HeadingPage from './pages/components/foundation/HeadingPage';
import TextPage from './pages/components/foundation/TextPage';
import IconPage from './pages/components/IconPage';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="components/forms/InputPage" element={<InputPage />} />
          <Route path="components/forms/SelectPage" element={<SelectPage />} />
          <Route path="components/forms/SwitchPage" element={<SwitchPage />} />
          <Route path="components/foundation/ColorPage" element={<ColorPage />} />
          <Route path="components/foundation/HeadingPage" element={<HeadingPage />} />
          <Route path="components/foundation/TextPage" element={<TextPage />} />
          <Route path="components/ButtonPage" element={<ButtonPage />} />
          <Route path="components/BadgePage" element={<BadgePage />} />
          <Route path="components/IconPage" element={<IconPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
