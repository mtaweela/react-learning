import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components 
import HomePage from './components/pages/homePage';

// includes

class App extends Component {
  render() {
    const title = "welcome newbie";
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={HomePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
