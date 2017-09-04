import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  fromJS
} from 'immutable'
import reducers from "./rootReducer";

const configureStore = preloadedState => {
  if (typeof preloadedState !== 'undefined') {
    var NewPreloadedState = {};
    Object.keys(preloadedState).map(reducer => NewPreloadedState[reducer] = fromJS(preloadedState[reducer]));
  } else {
    var NewPreloadedState = preloadedState;
  }
  return createStore(reducers, NewPreloadedState, applyMiddleware(thunk));
}

export default configureStore;
