import React, { Component } from 'react';

import Todo from "../components/todo";

import todostore from '../stores/todoStore';

class Todos extends Component {
constructor () {
  super();
  this.state = {
    todos: todostore.getAll()
  };
}

  render() {
    const {todos} = this.state;
    const todosComponents = todos.map(todo => {
      return <Todo key={todo.id} {...todo}/>
    })
    return (
      <div className="container-fluid">
        <h1>Todos page</h1>
        <ul>{todosComponents}</ul>
      </div>
    );
  }
}

export default Todos;
