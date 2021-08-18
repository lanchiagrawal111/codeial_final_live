import { combineReducers } from 'redux';
import posts from './posts';
import auth from './auth';
import profile from './profile';
import friends from './friends';
import search from './search';

//all reducer go into this, as it contain all reducer , because createstore need only one reducer that is rootReducer
export default combineReducers({
  posts,
  auth,
  profile,
  friends,
  search,
});
