import { combineReducers , createStore } from "redux";

// reducers
const userReducer = (state = {}, action) => {
    switch(action.type) {
        case "CHANGE_NAME": {
            state = {...state, name:action.payload}
            break;
        }
        case "CHANGE_AGE": {
            state = {...state, age:action.payload}
            break;
        }
    }

    return state;
};

const tweetsReducer = (state = [], action) => {
    return state;
};


// combined reducers
const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer
});


// store
const store = createStore(reducers);

store.subscribe(() => {
    console.log("store changed", store.getState())
});

store.dispatch({type: "CHANGE_NAME", payload: "will"});
store.dispatch({type: "CHANGE_AGE", payload: 35});
store.dispatch({type: "CHANGE_AGE", payload: 45});