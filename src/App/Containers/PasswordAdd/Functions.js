import {fetchQuery} from "../../../Fetch";
import {urlAddPassword} from "../../../Fetch/constants";

export const handleInputNamePassword = async (context, event) => {
	await context.setState({
		valueInputNamePassword: event.target.value,
		successInputNamePassword: event.target.value.length > 0,
	});
	buttonDisabled(context);
};

export const handleInputNameSite = async (context, event) => {
	await context.setState({
		valueInputNameSite: event.target.value,
		successInputNameSite: event.target.value.length > 3,
	});
	buttonDisabled(context);
};

export const handleInputPassword = async (context, event) => {
	await context.setState({
		valueInputPassword: event.target.value,
		successInputPassword: event.target.value.length > 0,
	});
	buttonDisabled(context);
};

export const addPassword = async context => {
	let data = {
		namePassword: context.state.valueInputNamePassword,
		nameSite: context.state.valueInputNameSite,
		password: context.state.valueInputPassword,
	};

	// console.log(context.props.id)
	console.log(data);
	console.log(urlAddPassword);

	await fetchQuery({data, url: urlAddPassword}, addPasswordSuccess, addPasswordError);
};

const addPasswordSuccess = data => {
	console.log(data);
};

const addPasswordError = () => {
	console.log(`error`);
};

const buttonDisabled = context => {
	// context.setState({
	// 	buttonDisabled: !(context.state.successInputNamePassword && context.state.valueInputNameSite && context.state.valueInputPassword),
	// });
};