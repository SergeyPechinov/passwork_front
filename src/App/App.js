import React, {Component} from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {router} from '../Router/Index';
import Header from "./Components/Header/Index.jsx";
import Footer from "./Components/Footer/Index.jsx";
import {connect} from "react-redux";
import {setLanguage} from "../Redux/Actions/Main";
import ChangeLanguage from "./Containers/ChangeLanguage/Index";

class App extends Component {
	render() {
		return (
				<div className="body container">
					<Header/>

					<div className="body__inner">
						{this.props.firstLaunch ? <ChangeLanguage/> :
								<Switch>
									{router.map((props, index) => <Route key={index} {...props}/>)}
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
});

const mapDispatchToProps = {
	setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
