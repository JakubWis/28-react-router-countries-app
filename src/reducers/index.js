import { combineReducers } from 'redux';
import countriesReducer from './countries-reducer';
 console.log(countriesReducer);
const reducers = combineReducers({
    countriesReducer
});

export default reducers;