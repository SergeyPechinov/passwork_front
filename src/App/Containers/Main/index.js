import React, {Component} from 'react';
import './Style.scss';
import './Functions.js';
import Button from "../../Components/UI/Button";
import {fetchQuery} from "../../../Fetch";
import {connect} from "react-redux";

class Main extends Component {
	btnClick = async () => {
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
					<p>{this.props.token.access}</p>
					<p>{this.props.dictionary.AuthRegPage.InputPasswordErrorIncorrect}</p>
				</div>
		)
	}
}

const mapStateToProps = state => ({
	dictionary: state.main.dictionary,
	token: state.main.token,
});

export default connect(mapStateToProps)(Main);