import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Layout extends Component {
  navigate() {
    this.props.history.push('/archives', null)
    // history.replace does not allow you to go back to previous page when hitting back button
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>layout page</h1>
        {this.props.children}
        <Link to="archives" className="btn btn-success">archives</Link>
        <Link to="settings" className="btn btn-success">settings</Link>
        <Link to="feautered" className="btn btn-success">feautered</Link>
        <button onClick={this.navigate.bind(this)} className="btn btn-success">archives</button>
      </div>
    );
  }
}

export default Layout;
