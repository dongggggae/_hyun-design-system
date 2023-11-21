import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import Layout from './layouts/Layout';

const ButtonPage = lazy(() => import('./pages/components/ButtonPage'));
const TypographyPage = lazy(() => import('./pages/components/TypographyPage'));
const ColorPage = lazy(() => import('./pages/components/ColorPage'));
const IconPage = lazy(() => import('./pages/components/IconPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default App;
