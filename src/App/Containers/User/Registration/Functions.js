import {fetchRequest} from "../../../../Fetch";
import {urlRegistration} from "../../../../Fetch/constants";
import {validatorEmail} from "../../../Constants/Js";

export const changeEmail = (context, event) => {
	const value = event.target.value;
	context.setState({inputEmail: value});

	if (validatorEmail(value)) {
		inputError(context, 'email');
	} else {
		inputError(context, 'email', true);
	}
};

export const changeName = (context, event) => {
	const value = event.target.value;
	context.setState({inputName: value});

	if (value.length >= 2) {
		inputError(context, 'name');
	} else {
		inputError(context, 'name', true);
	}
};

export const changePassword = (context, event) => {
	context.setState({inputPassword: event.target.value});
	const
			password = event.target.value,
			passwordConfirm = context.state.inputPasswordConfirm;
	checkPassword(context, password, passwordConfirm);
};

export const changePasswordConfirm = (context, event) => {
	context.setState({inputPasswordConfirm: event.target.value});
	const
			password = context.state.inputPassword,
			passwordConfirm = event.target.value;
	checkPassword(context, password, passwordConfirm);
};

export const btnRegistration = async context => {
	const
			email = context.state.inputEmail,
			name = context.state.inputName,
			password = context.state.inputPassword,
			passwordConfirm = context.state.inputPasswordConfirm;

	const errors = {
		email: !validatorEmail(email),
		name: !(name.length >= 2),
		password: !(password.length >= 8),
		passwordDuplicate: !(password === passwordConfirm),
	};

	if (errors.email || errors.name || errors.password || errors.passwordDuplicate) {
		const emailErrorText = errors.email ? context.props.dictionary.AuthRegPage.InputEmailError : '';
		const nameErrorText = errors.name ? context.props.dictionary.AuthRegPage.InputNameError : '';
		let passwordErrorText = '';

		if (errors.password && errors.passwordDuplicate) {
			passwordErrorText = `${context.props.dictionary.AuthRegPage.InputPasswordErrorLength} ${context.props.dictionary.AuthRegPage.inputPasswordErrorIncorrect}`;
		} else if (errors.password) {
			passwordErrorText = context.props.dictionary.AuthRegPage.InputPasswordErrorLength;
		} else if (errors.passwordDuplicate) {
			passwordErrorText = context.props.dictionary.AuthRegPage.InputPasswordErrorIncorrect;
		}

		inputsErrors(context, emailErrorText, nameErrorText, passwordErrorText);

	} else {
		const data = {
			email,
			name,
			password,
		};
		await registrationFetch(context, data);
	}
};

const registrationFetch = async (context, data) => {
	context.props.loaderOpen();
	return await fetch(fetchRequest(data, urlRegistration, 'POST'))
			.then(response => {
				return response.json();
			})
			.then(data => {
				if (!data.success) {
					if (data.messages) {
						inputsErrors(context, data.messages.emailError, data.messages.nameError, data.messages.passwordError);
					} else {
						pageError(context, data.message);
					}
				} else {
					context.props.history.push('/');
				}
				context.props.loaderHidden();
			})
			.catch(error => {
				if (error) {
					pageError(context, context.props.dictionary.AuthRegPage.RegErrorFetch);
				}
			});
};

const inputError = (context, input, error = false) => {
	switch (input) {
		case 'email':
			if (error) {
				context.setState({
					inputEmailError: true,
					inputEmailSuccess: false,
				});
			} else {
				context.setState({
					inputEmailError: false,
					inputEmailSuccess: true,
					inputEmailErrorText: '',
				})
			}
			break;
		case 'name':
			if (error) {
				context.setState({
					inputNameError: true,
					inputNameSuccess: false,
				});
			} else {
				context.setState({
					inputNameError: false,
					inputNameSuccess: true,
					inputNameErrorText: '',
				})
			}
			break;
		case 'password':
			if (error) {
				context.setState({
					inputPasswordError: true,
					inputPasswordSuccess: false,
				});
			} else {
				context.setState({
					inputPasswordError: false,
					inputPasswordSuccess: true,
					inputPasswordErrorText: '',
				})
			}
			break;

		default:
			break;
	}
};

const inputsErrors = (context, email, name, password) => {
	context.setState({
		inputEmailError: email ? true : false,
		inputNameError: name ? true : false,
		inputPasswordError: password ? true : false,

		inputEmailErrorText: email ? email : '',
		inputNameErrorText: name ? name : '',
		inputPasswordErrorText: password ? password : '',

		inputEmailSuccess: email ? false : true,
		inputNameSuccess: name ? false : true,
		inputPasswordSuccess: password ? false : true,

		pageErrorText: '',
	});
};

const pageError = (context, text) => {
	context.setState({
		inputEmailError: false,
		inputNameError: false,
		inputPasswordError: false,

		inputEmailErrorText: '',
		inputNameErrorText: '',
		inputPasswordErrorText: '',

		pageErrorText: text,
	});
};

const checkPassword = (context, password, passwordConfirm) => {
	if (password === passwordConfirm &&
			password.length >= 8 &&
			passwordConfirm.length >= 8) {
		inputError(context, 'password')
	} else {
		inputError(context, 'password', true);
	}
};
