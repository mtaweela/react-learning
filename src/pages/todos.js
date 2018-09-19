import React, { Component } from 'react';

import Todo from "../components/todo";
import * as todoActions from "../actions/todoActions";
import todostore from '../stores/todoStore';

class Todos extends Component {
constructor () {
  super();
  this.state = {
    todos: todostore.getAll()
  };
}

  componentWillMount() {
    todostore.on("change", () => {
      this.setState({
        todos: todostore.getAll()
      })
    })
  }

  createTodo() {
    todoActions.createTodo(Date.now());
  }

  render() {
    const {todos} = this.state;
    const todosComponents = todos.map(todo => {
      return <Todo key={todo.id} {...todo}/>
    })
    return (
      <div className="container-fluid">
        <button onClick={this.createTodo.bind(this)}>Create!</button>
        <h1>Todos</h1>
        <ul>{todosComponents}</ul>
      </div>
    );
  }
}

export default Todos;
