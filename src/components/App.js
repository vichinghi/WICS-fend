import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './common/NavBar';
import Statistics from "./Statistics";


export const NotFound = () => (
  <h1>Page Not Found</h1>
);

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/statistics" component={Statistics} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}


export default App;