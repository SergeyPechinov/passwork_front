import {
	SET_FIRST_LAUNCH,
	SET_LANGUAGE
} from "../../Constants/Main";

const initialState = {
	firstLaunch: true,
	language: 'en',
	dictionary: require('./../../../Langs/en.json'),
};

export function reducerMain(state = initialState, action) {
	switch (action.type) {
		case SET_FIRST_LAUNCH:
			return {
				...state,
				firstLaunch: action.payload,
			};
		case SET_LANGUAGE:
			return {
				...state,
				language: action.payload.language,
				dictionary: action.payload.dictionary,
			};
		default:
			return state;

	}
}