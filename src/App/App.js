import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {router} from '../Router/index.js';
import Header from "./Components/Header/Index";
import Footer from "./Components/Footer/Index";

function App() {
	return (
			<div className="body container">
				<Header/>

				<div className="body__inner">
					<Switch>
						{router.map((props, index) => <Route key={index} {...props}/>)}
					</Switch>
				</div>

				<Footer/>
			</div>
	);
}

export default App;
