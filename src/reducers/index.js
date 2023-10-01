import { combineReducers } from 'redux';
import author from './authorReducer';

const rootReducer = combineReducers({
  author: author,
});

export default rootReducer;