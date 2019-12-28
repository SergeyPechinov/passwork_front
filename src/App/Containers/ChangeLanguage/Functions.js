export const changeFirstLaunch = (payload, setFirstLaunch) => {
	setFirstLaunch(payload);
	localStorage.setItem('firstLaunch', payload);
};

export const changeLanguage = (language, setLanguage) => {
	setLanguage(language);
	localStorage.setItem('language', language);
};