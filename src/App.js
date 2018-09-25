import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Layout from "./components/layout";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout/>
      </Provider>
    );
  }
}

export default App;

