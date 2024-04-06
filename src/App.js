import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import FavoriteVideoPage from './components/FavoriteVideoPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/favorite-videos" component={FavoriteVideoPage} />
      </Switch>
    </Router>
  );
}

export default App;
