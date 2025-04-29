import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ConsultaPage from './pages/ConsultaPage';
import EmitirPage from './pages/EmitirPage';
import DeclararPage from './pages/DeclararPage';

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-6 space-x-4">
          <Link className="text-blue-500 hover:underline" to="/">Consulta</Link>
          <Link className="text-blue-500 hover:underline" to="/emitir">Emissão</Link>
          <Link className="text-blue-500 hover:underline" to="/declarar">Declaração</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ConsultaPage />} />
          <Route path="/emitir" element={<EmitirPage />} />
          <Route path="/declarar" element={<DeclararPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
