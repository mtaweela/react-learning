import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components 
import Layout from './components/pages/layout';
import Feautered from './components/pages/feautered';
import Archives from './components/pages/archives';
import Settings from './components/pages/settings';


// includes

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path='/' component={Layout}/>
            <Route exact path='/feautered' component={Feautered}/>
            <Route   path='/archives/:article?' component={Archives}/>
            <Route exact path='/settings' component={Settings}/>
        </div>
      </Router>
    );
  }
}

export default App;

