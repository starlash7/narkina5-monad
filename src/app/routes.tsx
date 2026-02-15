import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Arena } from '../pages/Arena';
import { About } from '../pages/About';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/arena" element={<Arena />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
