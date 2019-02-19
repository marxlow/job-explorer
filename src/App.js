import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from 'shared/routes/PrivateRoute';
import DashboardPage from 'pages/DashboardPage';
import LoginPage from 'pages/LoginPage';
import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* Public Pages */}
          <Route exact path="/login" component={LoginPage} />

          {/* Private Pages */}
          <PrivateRoute exact path ="/" component={DashboardPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
