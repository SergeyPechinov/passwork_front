import {combineReducers} from 'redux';
import {reducerMain} from './Main/Index.js';
import {reducerLoader} from "./Loader";

const appReducer = combineReducers({
	main: reducerMain,
	loader: reducerLoader,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};