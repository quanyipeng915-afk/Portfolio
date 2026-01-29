import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ProjectPage } from './components/ProjectPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Helper routes for direct linking to sections */}
        <Route path="/work" element={<HomePage />} />
        <Route path="/playground" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;