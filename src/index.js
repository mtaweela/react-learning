import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";
const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

// reducer
const reducer = function(state=initialState, action) {
    switch (action.type) {
        case "FETCH_USERS_PENDING" : {
            return {...state, fetching: true};
            break;
        }
        case "FETCH_USERS_REJECTED" : {
            return {...state, fetching: false, error: action.payload};
            break;
        }
        case "FETCH_USERS_FULIFILLED" : {
            return {...state, fetching: false, fetched: true, users: action.payload};
            break;
        }
    }

    return state;
};

// middlewares
const middleware = applyMiddleware(promise(), thunk, logger);

// store
const store = createStore(reducer, middleware);

store.dispatch({
    type: "FOO",
    payload: axios.get("http://rest.learncode.academy/api/mohamed/users")
});
