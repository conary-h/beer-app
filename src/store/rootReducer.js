import { combineReducers } from 'redux';
import { reducer as home } from '../features/Home';
import { reducer as details } from '../features/Details';

const rootReducer = {
  home,
  details,
};

export default combineReducers(rootReducer);
