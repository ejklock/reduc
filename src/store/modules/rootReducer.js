import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import search from './search/reducer';

export default combineReducers({
  auth,
  user,
  search,
});
