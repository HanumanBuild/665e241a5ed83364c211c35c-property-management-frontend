
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Sets up the routing for the React application using React Router.
 * This file defines the routes for the application, ensuring that navigation
 * between different components and pages is managed correctly.
 */
const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                {/* Additional routes can be added here as the application grows */}
            </Switch>
            <Footer />
        </Router>
    );
};

export default AppRouter;
