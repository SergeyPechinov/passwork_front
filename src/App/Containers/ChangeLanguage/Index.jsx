import React, {Component} from "react";
import './Functions';
import './Style.scss';
import {connect} from "react-redux";
import {setLanguage} from "../../../Redux/Actions/Main";
import Button from "../../Components/Button";

class ChangeLanguage extends Component {
	render() {
		return (
				<div className={'change-language-page'}>
					<div className={'change-language-page__inner'}>
						<p className="change-language-page__title">
							{this.props.dictionary.ChangeLanguagePage.ChangeLanguage}
						</p>
						<div className="change-language-page__button-list">
							<Button
									onClick={() => {
										this.props.setLanguage('ru')
									}}
									class={'change-language-page__button-item'} color={'blue'} value={'РУССКИЙ'}/>
							<Button
									onClick={() => {
										this.props.setLanguage('en')
									}}
									class={'change-language-page__button-item'} color={'red'} value={'ENGLISH'}/>
						</div>
						<Button class={'change-language-page__button-bottom'} color={'green'}
						        value={this.props.dictionary.ChangeLanguagePage.ButtonContinue}/>
					</div>
				</div>
		);
	}
}

const mapStateToProps = state => ({
	dictionary: state.main.dictionary,
});

const mapDispatchToProps = {
	setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);