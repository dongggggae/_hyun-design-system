import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import Layout from './layouts/Layout';

const InputPage = lazy(() => import('./pages/components/forms/InputPage'));
const SelectPage = lazy(() => import('./pages/components/forms/SelectPage'));
const SwitchPage = lazy(() => import('./pages/components/forms/SwitchPage'));
const ColorPage = lazy(() => import('./pages/components/foundation/ColorPage'));
const HeadingPage = lazy(() => import('./pages/components/foundation/HeadingPage'));
const TextPage = lazy(() => import('./pages/components/foundation/TextPage'));
const ButtonPage = lazy(() => import('./pages/components/ButtonPage'));
const IconPage = lazy(() => import('./pages/components/IconPage'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="components/IconPage" element={<IconPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
