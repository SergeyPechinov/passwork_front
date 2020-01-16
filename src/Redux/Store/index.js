import {rootReducer} from "../Reducers/Index";
import {createStore} from "redux";
export const store = createStore(rootReducer);