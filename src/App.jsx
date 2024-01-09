import { Routes, Route } from 'react-router-dom';

import navData from './data/nav';
import Layout from './layouts/Layout';
import { ThemeProvider } from '@/theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navData
            .flatMap((data) => (data.children ? data.children : data))
            .map((data) => (
              <Route key={data.name} path={data.to} element={<data.component />} />
            ))}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
