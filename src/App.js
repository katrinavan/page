import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';          // NavBar.js is present
import HomePage from './components/HomePage';      // HomePage.js is present
import AboutUsPage from './components/AboutUsPage';// AboutUsPage.js is present
import FavoriteVideoPage from './components/FavoriteVideoPage'; // FavoriteVideoPage.js is present

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/favorite-videos" element={<FavoriteVideoPage />} />
          {/* ... other routes ... */}
        </Routes>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()}  All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
