// App.js
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Btn from './pages/components/Btn';
import Typography from './pages/components/Typography';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="components/btn" element={<Btn />} />
        <Route path="components/typography" element={<Typography />} />
      </Route>
    </Routes>
  );
}

export default App;
