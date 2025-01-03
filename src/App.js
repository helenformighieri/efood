import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index.tsx';
import Products from './pages/Products/index.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products/:id" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;