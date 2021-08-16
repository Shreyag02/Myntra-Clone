import { createStore, combineReducers } from "redux";

import reducer from "./Reducer/reducer";

const rootReducer = combineReducers({
  cartProducts: reducer,

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

const store = createStore(rootReducer);

export default store;
