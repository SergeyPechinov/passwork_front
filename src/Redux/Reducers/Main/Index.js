import {
	SET_FIRST_LAUNCH,
	SET_LANGUAGE
} from "../../Constants/Main";

const initialState = {
	firstLaunch: !localStorage.getItem('firstLaunch'),
	language:
			localStorage.getItem('language') === 'ru' ? 'ru' : 'en',
	dictionary:
			localStorage.getItem('language') === 'ru' ?
					require('../../../Dictionary/ru.json') :
					require('../../../Dictionary/en.json'),
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