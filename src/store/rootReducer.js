import { combineReducers } from 'redux';
import { reducer as home } from '../features/Home';

const rootReducer = {
  home,
};

export default combineReducers(rootReducer);
