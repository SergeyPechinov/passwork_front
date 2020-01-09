import {
	SET_FIRST_LAUNCH,
	SET_LANGUAGE,
	SET_TOKEN
} from "../Constants/Main";

export const setFirstLaunch = payload => {
	return {
		type: SET_FIRST_LAUNCH,
		payload,
	}
};

export const setLanguage = language => {
	let dictionary = language === 'ru' ? require('../../Dictionary/ru.json') : require('../../Dictionary/en.json');

	return {
		type: SET_LANGUAGE,
		payload: {
			language,
			dictionary,
		},
	}
};

export const setToken = token => {
	return {
		type: SET_TOKEN,
		payload: token,
	}
};