import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import FavoriteVideoPage from './components/FavoriteVideoPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/favorite-videos" component={FavoriteVideoPage} />
      </Switch>
    </Router>
  );
}

export default App;
