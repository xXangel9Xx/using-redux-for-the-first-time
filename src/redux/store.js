import { createStore,combineReducers } from 'redux';
import currentItem from './reducers/currentItem';
import results from './reducers/results';
import suggestions from './reducers/suggestions';
const reducer = combineReducers[{

}];
const store = createStore(reducer);
export default store