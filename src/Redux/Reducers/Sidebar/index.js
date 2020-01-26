import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE_START,
	SIDEBAR_CLOSE_DONE,
} from "../../Constants/Sidebar";

const initialState = {
	open: false,
	hidden: true,
};

export const reducerSidebar = (state = initialState, action) => {
	switch (action.type) {
		case SIDEBAR_OPEN: {
			return {
				...state,
				open: true,
				hidden: false,
			}
		}
		case SIDEBAR_CLOSE_START: {
			return {
				...state,
				hidden: true,
			}
		}
		case SIDEBAR_CLOSE_DONE: {
			return {
				...state,
				open: false,
			}
		}
		default:
			return state;
	}
};