export const fetchRequest = (body, url, method = 'POST') => {
	const address = `http://127.0.0.1:4000/${url}`;

	if (typeof body === 'object') {
		body = JSON.stringify(body);
	}

	return new Request(address, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: body,
	});
};