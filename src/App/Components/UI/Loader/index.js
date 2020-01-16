import React, {Component} from "react";
import './Style.scss';
import {connect} from 'react-redux';
import {loaderHiddenDone} from "../../../../Redux/Actions/Loader";

class Loader extends Component {
	componentDidMount() {
		this.updateHiddenIfCloseTrue();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		this.updateHiddenIfCloseTrue();
	}

	updateHiddenIfCloseTrue = () => {
		if (this.props.loaderOpen === false && this.props.loaderHidden === false) {
			setTimeout(() => {
						this.props.loaderHiddenDone();
					}, 100
			)
		}
	};

	render() {
		return (
				<div
						className={`loader
							${this.props.loaderOpen ? 'loader--open' : 'loader--close'}
							${this.props.loaderHidden ? 'loader--hidden' : ''}`}>
					<div className="loader__inner">
						<i className="loader__item loader__item--one"/>
						<i className="loader__item loader__item--two"/>
						<i className="loader__item loader__item--three"/>
						<i className="loader__item loader__item--four"/>
						<i className="loader__item loader__item--five"/>
					</div>
				</div>
		)
	}
}

const mapStateToProps = state => ({
	loaderOpen: state.loader.open,
	loaderHidden: state.loader.hidden,
});

const mapDispatchToProps = {
	loaderHiddenDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loader);