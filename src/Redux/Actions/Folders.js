import {FOLDERS_GET} from "../Constants/Folders";

export const foldersGet = folders => {
	return {
		type: FOLDERS_GET,
		payload: folders,
	}
};