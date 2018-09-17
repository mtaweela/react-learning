import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// components 
import HomePage from './components/pages/homePage';

// includes

class App extends Component {
  constructor() {
    super();
    this.state = {name: "will"};
  }

  render() {
    setTimeout(() => {
      this.setState({name:"Bob"})
    },1000)
    return (
        <div className="App">
          {this.state.name}
        </div>
    );
  }
}

export default App;
