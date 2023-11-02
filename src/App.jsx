// LIBRARY IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// LOCAL IMPORTS
import { Home, Layout, ProfessionalsPage, BioPage } from './views';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/professionals" element={<ProfessionalsPage />} />
          <Route path="/bio/:id" element={<BioPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
