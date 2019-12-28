import {combineReducers} from 'redux';
import {reducerMain} from './Main/Index.js';

const appReducer = combineReducers({
	main: reducerMain,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};