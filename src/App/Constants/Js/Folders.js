import {urlAddFolders, urlGetFolders} from "../../../Fetch/constants";
import {fetchQuery} from "../../../Fetch";



export const addFolder = async (context, successFunc) => {
	const name = "Vimeo";

	const data = {
		data: {
			name,
			id_parent: 3,
		},
		url: urlAddFolders,
		context,
	};

	await fetchQuery(data, successFunc);
};

export const getFolders = (context, successFunc) => {
	const data = {
		url: urlGetFolders,
		context
	};

	fetchQuery(data, successFunc).then();
};