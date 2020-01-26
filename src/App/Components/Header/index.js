import React, {Component} from 'react';
import './Style.scss';
import './Functions';
import {connect} from "react-redux";
import {sidebarOpen, sidebarClose, sidebarCloseDone} from "../../../Redux/Actions/Sidebar";
import {sidebarOpenClose} from "./Functions";

class Header extends Component {
	render() {
		return (
				<header className={'header container'}>
					<button
							className={`header__burger
							${this.props.sidebar.open ? 'header__burger--open' : ''}
							${(this.props.sidebar.hidden && this.props.sidebar.open) ? 'header__burger--close' : ''}`}
							onClick={() => {sidebarOpenClose(this)}}>
						<i className="header__burger-item"/>
					</button>
					<div className="qwe">qweqweqw</div>
				</header>
		);
	}
}

const mapStateToProps = state => ({
	sidebar: state.sidebar,
});

const mapDispatchToProps = {
	sidebarOpen,
	sidebarClose,
	sidebarCloseDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);