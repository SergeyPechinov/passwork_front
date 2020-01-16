import {
	LOADER_OPEN,
	LOADER_HIDDEN_START,
	LOADER_HIDDEN_DONE,
} from "../../Constants/Loader";

const initialState = {
	open: false,
	hidden: true,
};

export const reducerLoader = (state = initialState, action) => {
	switch (action.type) {
		case LOADER_OPEN:
			return {
				...state,
				open: true,
				hidden: false,
			};

		case LOADER_HIDDEN_START:
			return {
				...state,
				open: false,
			};

		case LOADER_HIDDEN_DONE:
			return {
				...state,
				hidden: true,
			};
		default:
			return state;
	}
};