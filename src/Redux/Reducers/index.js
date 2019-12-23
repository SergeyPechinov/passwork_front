import {combineReducers} from 'redux';
import {reducerMain} from './Main';

const appReducer = combineReducers({
	main: reducerMain,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};