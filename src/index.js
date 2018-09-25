import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null
}

// reducer
const reducer = function(state=initialState, action) {
    switch (action.type) {
        case "FETCH_USER_START" : {
            return {...state, fetching: true};
            break;
        }
        case "FETCH_USER_ERROR" : {
            return {...state, fetching: false, error: action.payload};
            break;
        }
        case "RECIEVE_USERS" : {
            return {...state, fetching: false, fetched: true, users: action.payload};
            break;
        }
    }

    return state;
};

// middlewares
const middleware = applyMiddleware( thunk, logger);

// store
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
    dispatch({type: "FETCH_USER_START"});
    axios.get("http://rest.learncode.academy/api/mohamed/users")
        .then((res) => {
            dispatch({type: "RECIEVE_USERS", payload: res.data});
        })
        .catch((err) => {
            dispatch({type: "FETCH_USERS_ERROR", payload: err});
        });
});