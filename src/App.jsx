// App.js
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeContext';
import Layout from './layouts/Layout';
import Btn from './pages/components/Btn';
import Typography from './pages/components/Typography';
import Colors from './pages/components/Colors';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="components/Btn" element={<Btn />} />
          <Route path="components/Typography" element={<Typography />} />
          <Route path="components/Colors" element={<Colors />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
