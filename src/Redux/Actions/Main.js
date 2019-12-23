import {SET_LANGUAGE} from "../Constants/main";

export const setLanguage = language => {
	return {
		type: SET_LANGUAGE,
		payload: language,
	}
};