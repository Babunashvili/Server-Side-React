import "isomorphic-fetch";
import {
  combineReducers
} from 'redux';
import {
  commonReducer
} from './modules/common/commonReducer'
import {
  reposReducer
} from './modules/repos/reposReducer'

const rootReducer = combineReducers({
  common: commonReducer,
  repos: reposReducer,
});

export default function root(state, action) {
  return rootReducer(state, action)
}
