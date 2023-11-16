// App.js
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import Layout from './layouts/Layout';
import Btn from './pages/components/Btn';
import Typography from './pages/components/Typography';
import Color from './pages/components/Color';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="components/Btn" element={<Btn />} />
          <Route path="components/Typography" element={<Typography />} />
          <Route path="components/Color" element={<Color />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
