import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import FavoriteVideoPage from './components/FavoriteVideoPage'; // Make sure the file name matches this component name


function App() {
  return (
    <Router>
      <NavBar /> {/* Make sure this matches the import */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Removed exact */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/favorite-videos" element={<FavoriteVideoPage />} />
  
      </Routes>
    </Router>
  );
}

export default App;
