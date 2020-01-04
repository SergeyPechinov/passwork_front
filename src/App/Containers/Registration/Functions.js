export const changeEmail = (context, event) => {
	context.setState({inputEmail: event.target.value});
};

export const changeName = (context, event) => {
	context.setState({inputName: event.target.value});
};

export const changePassword = (context, event) => {
	context.setState({inputPassword: event.target.value});
};

export const changePasswordConfirm = (context, event) => {
	context.setState({inputPasswordConfirm: event.target.value});
};