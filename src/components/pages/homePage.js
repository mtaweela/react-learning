import React, { Component } from 'react';
import Title from './title';

class HomePage extends Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div className="container-fluid">
        <Title title={this.props.title}/>
        <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}

export default HomePage;
