import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

// components 
import Layout from './components/pages/layout';
import Feautered from './components/pages/feautered';
import Archives from './components/pages/archives';
import Settings from './components/pages/settings';


// includes

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Feautered}></IndexRoute>
          <Route path="archives(/:article)" name="archives" component={Archives}></Route>
          <Route path="settings" name="settings" component={Settings}></Route>
        </Route>
      </Router>
    );
  }
}

export default App;