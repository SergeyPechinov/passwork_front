import {
	LOADER_OPEN,
	LOADER_HIDDEN_START,
	LOADER_HIDDEN_DONE,
} from "../Constants/Loader";

export const loaderOpen = () => {
	return {
		type: LOADER_OPEN,
	}
};

export const loaderHidden = () => {
	return {
		type: LOADER_HIDDEN_START,
	}
};

export const loaderHiddenDone = () => {
	return {
		type: LOADER_HIDDEN_DONE,
	}
};