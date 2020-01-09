import {fetchQuery} from "../../../Fetch";
import {validatorEmail} from "../../Constants/Js";

export const changeEmail = (context, event) => {
	const value = event.target.value;
	context.setState({inputEmail: value});
	if (validatorEmail(value)) {
		inputError(context, 'email');
	} else {
		inputError(context, 'email', true);
	}
};

export const changePassword = (context, event) => {
	const value = event.target.value;
	context.setState({inputPassword: value});
	if (value.length >= 8) {
		inputError(context, 'password');
	} else {
		inputError(context, 'password', true);
	}
};

export const btnEnter = async context => {
	const
			email = context.state.inputEmail,
			password = context.state.inputPassword,
			validateEmail = validatorEmail(email),
			validatePassword = password.length >= 8;

	if (validateEmail && validatePassword) {
		await authorizationFetch(context, {email, password});
	} else {
		const emailErrorText = !validateEmail ? context.props.dictionary.AuthRegPage.InputEmailError : '';
		const passwordErrorText = !validatePassword ? context.props.dictionary.AuthRegPage.InputPasswordErrorLength : '';

		inputsErrors(context, emailErrorText, passwordErrorText);
	}
};

const authorizationFetch = async (context, data) => {
	const success = data => {
		if (data.success) {
			const tokenFull = JSON.stringify(data.tokenFull);
			context.props.setToken(tokenFull);
			localStorage.setItem('token', tokenFull);
		} else {
			if (data.messages) {
				inputsErrors(context, data.messages.email, data.messages.password);
			}
			if (data.message) {
				pageError(context, data.message);
			}
		}
	};

	const error = () => {
		pageError(context, context.props.dictionary.AuthRegPage.RegErrorFetch);
	};

	await fetchQuery({data, url: 'auth'}, success, error);
};

const inputsErrors = (context, email, password) => {
	context.setState({
		inputEmailError: email ? true : false,
		inputPasswordError: password ? true : false,

		inputEmailErrorText: email ? email : '',
		inputPasswordErrorText: password ? password : '',

		inputEmailSuccess: email ? false : true,
		inputPasswordSuccess: password ? false : true,

		pageErrorText: '',
	});
};

const inputError = (context, input, error = false) => {
	switch (input) {
		case 'email':
			if (error) {
				context.setState({
					inputEmailError: true,
					inputEmailErrorText: '',
					inputEmailSuccess: false,
				})
			} else {
				context.setState({
					inputEmailError: false,
					inputEmailErrorText: '',
					inputEmailSuccess: true,
				});
			}
			break;
		case 'password':
			if (error) {
				context.setState({
					inputPasswordError: true,
					inputPasswordErrorText: '',
					inputPasswordSuccess: false,
				})
			} else {
				context.setState({
					inputPasswordError: false,
					inputPasswordErrorText: '',
					inputPasswordSuccess: true,
				});
			}
			break;

		default:
			break;
	}
};

const pageError = (context, text) => {
	context.setState({
		inputEmailError: true,
		inputPasswordError: true,

		inputEmailErrorText: '',
		inputPasswordErrorText: '',

		inputEmailSuccess: false,
		inputPasswordSuccess: false,

		pageErrorText: text,
	});
};