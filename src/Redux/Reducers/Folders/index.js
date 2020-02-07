import {FOLDERS_GET} from "../../Constants/Folders";

const initialState = {
	folders: '',
};

export const reducerFolders = (state = initialState, action) => {
	switch (action.type) {
		case FOLDERS_GET:
			return {
				...state,
				folders: action.payload,
			};
		default:
			return state;
	}
};