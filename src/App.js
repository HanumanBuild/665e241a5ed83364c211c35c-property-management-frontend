
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * App.js is the entry point for the React app. It imports all the pages and components and sets up the routing.
 * This setup includes the main Home page and potentially other pages that can be added later.
 */
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Additional routes can be added here as needed */}
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
