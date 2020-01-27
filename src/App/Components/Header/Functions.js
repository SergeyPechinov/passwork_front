export const sidebarOpenClose = context => {
	if(context.props.sidebar.open) {
		context.props.sidebarClose();
	} else {
		context.props.sidebarOpen();
	}
};