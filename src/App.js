import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import FavoriteVideoPage from './components/FavoriteVideoPage';
import './FadeTransition.css';

const App = () => {
  const location = useLocation(); // This is needed to make the transition work with React Router

  return (
    <Router>
      <NavBar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={250}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/favorite-videos" element={<FavoriteVideoPage />} />
            {/* Add more routes as necessary */}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Router>
  );
};

export default App;
