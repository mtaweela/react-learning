import React, { Component } from 'react';

// components 
import HomePage from './components/pages/homePage';

// includes

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "welcome"
    }
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
        <div className="App">
          <HomePage changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        </div>
    );
  }
}

export default App;