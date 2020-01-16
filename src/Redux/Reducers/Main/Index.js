import {
	SET_FIRST_LAUNCH,
	SET_LANGUAGE,
	SET_TOKEN,
	SET_USER_ID
} from "../../Constants/Main";

const initialState = {
	firstLaunch: !localStorage.getItem('firstLaunch'),
	language:
			localStorage.getItem('language') === 'ru' ? 'ru' : 'en',
	dictionary:
			localStorage.getItem('language') === 'ru' ?
					require('../../../Dictionary/ru.json') :
					require('../../../Dictionary/en.json'),
	token: JSON.parse(localStorage.getItem('token')),
	user_id: localStorage.getItem('user_id'),
};

export const reducerMain = (state = initialState, action) => {
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
		case SET_TOKEN: {
			return {
				...state,
				token: action.payload,
			}
		}
		case SET_USER_ID: {
			return {
				...state,
				user_id: action.payload,
			}
		}
		default:
			return state;
	}
};