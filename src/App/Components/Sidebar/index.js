import React, {Component} from 'react';
import './Style.scss';
import Button from "../UI/Button";
import {connect} from 'react-redux';
import {sidebarClose, sidebarCloseDone} from "../../../Redux/Actions/Sidebar";
import {closeSidebar} from "./Functions";

class Sidebar extends Component {
	render() {
		return (
				<div className={`sidebar ${this.props.class ? this.props.class : ''}`}>
					<div className="sidebar__bg" onClick={(event) =>{closeSidebar(this, event)}}>
						<nav className="sidebar__inner">
							<ul className="sidebar__menu">
								<li className="sidebar__menu-item">
									<Button color={"transparent"} textColor={"gray"} value={'Добавить пароль'}/>
								</li>
							</ul>
						</nav>
					</div>
				</div>
		);
	}
}

const mapDispatchToProps = ({
	sidebarClose,
	sidebarCloseDone,
});

export default connect(null, mapDispatchToProps)(Sidebar);