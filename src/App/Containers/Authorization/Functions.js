export const changeEmail = (context, event) => {
	context.setState({inputEmail: event.target.value});
};

export const changePassword = (context, event) => {
	context.setState({inputPassword: event.target.value});
};