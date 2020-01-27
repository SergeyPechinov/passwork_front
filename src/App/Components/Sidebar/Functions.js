export const closeSidebar = (context, event) => {
	if (event.target === event.currentTarget) {
		context.props.sidebarClose();
	}
};