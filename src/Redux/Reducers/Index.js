import {combineReducers} from 'redux';
import {reducerMain} from './Main/Index.js';
import {reducerLoader} from "./Loader";
import {reducerSidebar} from "./Sidebar";
import {reducerFolders} from "./Folders";

const appReducer = combineReducers({
	main: reducerMain,
	loader: reducerLoader,
	sidebar: reducerSidebar,
	folders: reducerFolders,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};