import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE_START,
	SIDEBAR_CLOSE_DONE,
} from "../Constants/Sidebar";

export const sidebarOpen = () => {
	return {
		type: SIDEBAR_OPEN,
	}
};

export const sidebarClose = () => {
	return {
		type: SIDEBAR_CLOSE_START,
	}
};

export const sidebarCloseDone = () => {
	return {
		type: SIDEBAR_CLOSE_DONE,
	}
};