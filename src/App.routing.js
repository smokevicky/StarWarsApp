// react imports
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// component imports
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

// style imports
import './App.css';

class AppRouting extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Login} />
          </Switch>
        </Router>
    );
  }
}

export default AppRouting;
