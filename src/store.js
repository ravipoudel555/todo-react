import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import TodoReducer from "./reducers/TodoReducer";
import ProductReducer from "./reducers/EcommerceReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  Todo: TodoReducer,
  Product: ProductReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
