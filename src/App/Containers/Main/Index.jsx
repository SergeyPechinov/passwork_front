import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Style.scss';
import './Functions.js';
import {setLanguage} from "../../../Redux/Actions/Main";

class Main extends Component {

	componentDidMount() {
		this.props.setLanguage('en');
		console.log(navigator.language)
	}

	render() {
		return (
				<div className="main container">
					{this.props.main}
				</div>
		)
	}
}

const mapStateToProps = state => ({
	main: state.main.language,
});

const mapDispatchToProps = {
	setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);