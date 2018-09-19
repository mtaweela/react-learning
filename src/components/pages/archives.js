import React, { Component } from 'react';
const queryString = require('query-string');

class Archives extends Component {
  render() {
    console.log(this.props);
    const parsed = queryString.parse(this.props.location.search);
    console.log(parsed)
    return (
      <div className="container-fluid">
        <h1>Archives page</h1>
        <p>{this.props.match.params.article}</p>
      </div>
    );
  }
}

export default Archives;
