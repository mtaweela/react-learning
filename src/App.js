import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Pages
import Todos from './pages/todos';

// includes

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Todos}/>
        </div>
      </Router>
    );
  }
}

export default App;

