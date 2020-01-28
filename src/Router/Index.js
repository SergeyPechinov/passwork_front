import Main from "../App/Containers/Main";
import PasswordAdd from "../App/Containers/PasswordAdd";

export const router = [
	{
		path: '/',
		exact: true,
		component: Main,
	},
	{
		path: '/password_add',
		exact: true,
		component: PasswordAdd,
	},
];