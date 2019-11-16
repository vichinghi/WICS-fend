import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Navbar from './common/NavBar';
import Settings from './settings';
import Statistics from "./Statistics";
import CrimeAreas from './CrimeAreas';


export const NotFound = () => (
  <h1>Page Not Found</h1>
);

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/statistics" component={Statistics} />
          <Route exact path="/crime-areas" component={CrimeAreas} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}


export default App;