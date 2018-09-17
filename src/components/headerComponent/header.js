import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
          <div className="logo">
            LOGo
          </div>
          <nav>
              <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Products">Products</Link>
                  </li>
                  <li>
                    <Link to="/">Contacts</Link>
                  </li>
              </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
