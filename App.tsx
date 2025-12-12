import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Passion from './pages/Passion';
import Family from './pages/Family';
import Journey from './pages/Journey';
import Future from './pages/Future';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/passion" element={<Passion />} />
          <Route path="/family" element={<Family />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/future" element={<Future />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;