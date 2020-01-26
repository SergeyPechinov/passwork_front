export const sidebarOpenClose = context => {
	if(context.props.sidebar.open) {
		context.props.sidebarClose();
		setTimeout(context.props.sidebarCloseDone, 300);
	} else {
		context.props.sidebarOpen();
	}
};