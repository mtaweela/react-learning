import React, { Component } from 'react';

import Todo from "../components/todo";
import * as todoActions from "../actions/todoActions";
import todostore from '../stores/todoStore';

class Todos extends Component {
constructor () {
  super();
  this.getTodos = this.getTodos.bind(this);
  this.state = {
    todos: todostore.getAll()
  };
}

  componentWillMount() {
    todostore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    todostore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: todostore.getAll()
    });
  }

  reloadTodos() {
    todoActions.reloadTodos();
  }

  render() {
    const {todos} = this.state;
    const todosComponents = todos.map(todo => {
      return <Todo key={todo._id} {...todo}/>
    })
    return (
      <div className="container-fluid">
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{todosComponents}</ul>
      </div>
    );
  }
}

export default Todos;
