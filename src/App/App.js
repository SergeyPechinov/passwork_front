import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import {router} from './../Router/index.js';

function App() {
	return (
			<div className="body">
				<Switch>
					{router.map((props, index) => <Route key={index} {...props}/>)}
				</Switch>
			</div>
	);
}

export default App;
