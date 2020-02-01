import React, {Component} from 'react';
import './Style.scss';
import Button from "../UI/Button";
import {connect} from 'react-redux';
import {sidebarClose, sidebarCloseDone} from "../../../Redux/Actions/Sidebar";
import {closeSidebar} from "./Functions";

class Sidebar extends Component {

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.sidebar.open && this.props.sidebar.hidden) {
			setTimeout(this.props.sidebarCloseDone, 300);
		}
	}

	render() {
		return (
				<div className={`sidebar ${this.props.class ? this.props.class : ''}`}>
					<div className="sidebar__bg" onClick={(event) =>{closeSidebar(this, event)}}>
						<nav className="sidebar__inner">
							<ul className="sidebar__menu">
								<li className="sidebar__menu-item">
									<Button
											onClick={this.props.sidebarClose}
											link={'/password_add'}
											color={"transparent"}
											textColor={"gray"}
											value={this.props.dictionary.Common.AddPassword}/>
								</li>
							</ul>
						</nav>
					</div>
				</div>
		);
	}
}

const mapStateToProps = state => ({
	sidebar: state.sidebar,
	dictionary: state.main.dictionary,
});

const mapDispatchToProps = ({
	sidebarClose,
	sidebarCloseDone,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);