import axios from 'axios';
import dispatcher from '../dispatcher/dispatcher';
export function createTodo(text) {
    dispatcher.dispatch({
        type: "CREATE_TODO",
        text
    });
}

export function deleteTodo(id) {
    dispatcher.dispatch({
        type: "DELETE_TODO",
        id
    });
}

export function reloadTodos() {
    dispatcher.dispatch({type: "FETCH_TODOS"});

    axios("http://localhost:3300/api/todos").then((data, err) => {
        console.log("get the data", data);
        dispatcher.dispatch({
            type: "RECEIVE_TODOS",
            todos: data.data.todos
        });
        if (err) {
            dispatcher.dispatch({type:"FETCH_TODOS_ERROR"})
        }
    });
}