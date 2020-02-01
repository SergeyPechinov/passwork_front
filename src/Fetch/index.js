import {store} from "../Redux/Store";
import {setToken} from "../Redux/Actions/Main";

export const fetchRequest = (body, url, method) => {
	const
			address = `http://127.0.0.1:4000/${url}`,
			tokenAccess = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')).access : '';

	if (typeof body === 'object') {
		body = {id: store.getState().main.user_id, ...body};
		body = JSON.stringify(body);
	}

	return new Request(address, {
		method,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': tokenAccess,
		},
		body: body,
	});
};

export const fetchQuery = async (settings, funcSuccess, funcError) => {
	const
			body = settings.data,
			url = settings.url,
			method = settings.method ? settings.method : 'POST';

	return await fetch(fetchRequest(body, url, method))
			.then(response => {
				return response.json();
			})
			.then(data => {
				if (data.success === false &&
						data.verifyAccess === false &&
						data.verifyRefresh === true) {
					localStorage.setItem('token', JSON.stringify(data.tokenFull));
					store.dispatch(setToken(data.tokenFull));
					fetchQuery(settings, funcSuccess, funcError);
				} else if (data.verifyRefresh === false) {
					localStorage.setItem('token', null);
					store.dispatch(setToken(null));
				} else {
					funcSuccess(data);
				}
			})
			.catch(error => {
				if (error) {
					funcError(error);
				}
			});
};