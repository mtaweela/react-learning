import {EventEmitter} from "events";

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

    getAll () {
        return this.todos;
    }
}

const todostore = new TodoStore;

export default todostore;