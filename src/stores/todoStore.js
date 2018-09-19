import {EventEmitter} from "events";
import dispatcher from "../dispatcher/dispatcher";

class TodoStore extends EventEmitter {
constructor () {
    super();
    this.todos = [
        {
          id: 1,
          text:"go shopping",
          complete: true
        },
        {
          id: 2,
          text:"do not go shopping",
          complete: false
        }
      ];
}

    createTodo (text) {
        this.todos.push ({
            id: Date.now(),
            text,
            complete: false
        })

        this.emit("change");
    }

    getAll () {
        return this.todos;
    }

    handleActions(action) {
        switch(action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
        }
    }
}

const todostore = new TodoStore;
dispatcher.register(todostore.handleActions.bind(todostore));
window.dispatcher = dispatcher;

export default todostore;