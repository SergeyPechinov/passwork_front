import {fetchQuery} from "../../../Fetch";
import {urlAddFolders, urlAddPassword, urlGetFolders} from "../../../Fetch/constants";

export const handleInputNamePassword = async (context, event) => {
	await context.setState({
		valueInputNamePassword: event.target.value,
		successInputNamePassword: event.target.value.length > 0,
		messageInputNamePassword: '',
	});
	buttonDisabled(context);
};

export const handleInputNameSite = async (context, event) => {
	await context.setState({
		valueInputNameSite: event.target.value,
		successInputNameSite: event.target.value.length > 3,
		messageInputNameSite: '',
	});
	buttonDisabled(context);
};

export const handleInputPassword = async (context, event) => {
	await context.setState({
		valueInputPassword: event.target.value,
		successInputPassword: event.target.value.length > 0,
		messageInputPassword: '',
	});
	buttonDisabled(context);
};

export const addPassword = async context => {
	let data = {
		namePassword: context.state.valueInputNamePassword,
		nameSite: context.state.valueInputNameSite,
		password: context.state.valueInputPassword,
	};

	await fetchQuery({data, url: urlAddPassword, context}, addPasswordSuccess);
};

const addPasswordSuccess = (data, context) => {
	if (!data.success) {
		context.setState({
			messageInputNameSite: data.messages.nameSite,
			messageInputNamePassword: data.messages.namePassword,
			messageInputPassword: data.messages.password,

			successInputNamePassword: !data.messages.namePassword,
			successInputNameSite: !data.messages.nameSite,
			successInputPassword: !data.messages.password,
		});
	}
};

const buttonDisabled = context => {
	context.setState({
		buttonDisabled: !(context.state.successInputNamePassword && context.state.successInputNameSite && context.state.successInputPassword),
	});
};