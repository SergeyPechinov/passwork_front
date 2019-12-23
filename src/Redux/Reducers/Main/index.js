import {SET_LANGUAGE} from "../../Constants/main";

const initialState = {
	language: 'ru',
};

export function reducerMain(state = initialState, action) {
	switch (action.type) {
		case SET_LANGUAGE:
			return {
				...state,
				language: action.payload,
			};
		default:
			return state;

	}
}