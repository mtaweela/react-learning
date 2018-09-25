import { createStore, applyMiddleware } from "redux";

// reducer
const reducer = function(state, action) {
    if (action.type === "INC") {
        return state + action.payload;
    } else if (action.type === "DEC") {
        return state - action.payload;
    }else if (action.type === "E") {
        throw new Error("AHHHH!!!");
    }

    return state;
};


// middlewares
const logger = (store) => (next) => (action) => {
    console.log("action fired", action);
    next(action);
}

const error = (store) => (next) => (action) => {
    try{
        next(action);
    } catch (e) {
        console.log("AHHHHH!!", e);
    }
}

const middleware = applyMiddleware(logger, error);

// store
const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
    console.log("store changed", store.getState())
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 222});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 3});
store.dispatch({type: "E"});