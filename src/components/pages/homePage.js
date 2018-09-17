import React, { Component } from 'react';

class HomePage extends Component {
  constructor() {
    super();
    this.title = 'Home Page content'
    // this.state = {name:"will"}
  }

  render() {
    console.log(this.props);
    return (
        <div className="container-fluid">
            {this.title}
        </div>
    );
  }
}

export default HomePage;
