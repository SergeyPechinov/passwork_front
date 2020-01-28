import React, {Component} from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {router} from '../Router/Index';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {connect} from "react-redux";
import {setLanguage, setToken} from "../Redux/Actions/Main";
import ChangeLanguage from "./Containers/User/ChangeLanguage";
import Registration from "./Containers/User/Registration";
import Authorization from "./Containers/User/Authorization";
import Loader from "./Components/UI/Loader";
import Sidebar from "./Components/Sidebar";

class App extends Component {
	render() {
		return (
				<div className="body container">
					<Loader/>

					{this.props.sidebar.open ? <Sidebar class={this.props.sidebar.hidden ? 'sidebar--close' : ''}/> : null}

					<Header/>

					<div className="body__inner">
						{this.props.firstLaunch ? <ChangeLanguage/> :
								this.props.token ?
										<Switch>
											{router.map((props, index) => <Route key={index} {...props}/>)}
										</Switch>
										:
										<Switch>
											<Route exact={true} path={"/"} component={Authorization}/>
											<Route path={"/registration"} component={Registration}/>
											<Route component={Authorization}/>
										</Switch>
						}
					</div>

					<Footer/>
				</div>
		);
	}
}

const mapStateToProps = state => ({
	firstLaunch: state.main.firstLaunch,
	language: state.main.language,
	dictionary: state.main.dictionary,
	token: state.main.token,
	sidebar: state.sidebar,
});

const mapDispatchToProps = {
	setLanguage,
	setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
