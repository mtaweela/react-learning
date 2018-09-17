import React, { Component } from 'react';

class HomePage extends Component {
  constructor() {
    super();
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
