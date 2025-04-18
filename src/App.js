import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WeddingWebsite from './components/WeddingWebsite';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invitation/:slug" element={<WeddingWebsite />} />
      </Routes>
    </Router>
  );
}

export default App;