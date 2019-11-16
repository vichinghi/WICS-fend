import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Settings from './settings';
import Statistics from "./Statistics";
import CrimeAreas from './CrimeAreas';
import AlertList from "./AlertList";


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
          <Route exact path="/alerts" component={AlertList} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}


export default App;