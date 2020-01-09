import React, {Component} from 'react';
import './Style.scss';
import './Functions.js';
import Button from "../../Components/UI/Button";
import {fetchQuery} from "../../../Fetch";

class Main extends Component {

	btnClick = async () => {
		console.log('btn test!');
		const data = {
			email: 'qwe@qwe.qwe',
		};

		await fetchQuery({data, url: 'test'},
				data => {
					console.log(data);
				},
				() => {
					console.log('error');
				});
	};

	render() {
		return (
				<div className="main container">
					<Button onClick={this.btnClick} color={'green'} value={'Test'}/>
				</div>
		)
	}
}

export default Main;