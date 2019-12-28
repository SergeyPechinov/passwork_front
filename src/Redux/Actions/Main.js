import {
	SET_FIRST_LAUNCH,
	SET_LANGUAGE
} from "../Constants/Main";

export const setFirstLaunch = payload => {
	return {
		type: SET_FIRST_LAUNCH,
		payload,
	}
};

export const setLanguage = language => {
	let dictionary = language === 'ru' ? require('./../../Langs/ru.json') : require('./../../Langs/en.json');

	return {
		type: SET_LANGUAGE,
		payload: {
			language,
			dictionary,
		},
	}
};