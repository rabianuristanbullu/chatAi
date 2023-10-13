import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import { chatReducer } from "./reducers/chatReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  chatState: chatReducer,
});

// redux thunk devtools extension

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
