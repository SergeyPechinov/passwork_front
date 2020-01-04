import React, {Component} from "react";
import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";
import {changeEmail, changePassword} from "./Functions";
import {number} from 'prop-types';
import {connect} from "react-redux";


class Authorization extends Component {

	state = {
		inputEmail: '',
		inputName: '',
		inputPassword: '',
		inputPasswordConfirm: '',
	};

	render() {
		return (
				<div className={'auth-reg-page'}>
					<div className={'auth-reg-page__inner'}>
						<div className="auth-reg-page__inputs">
							<Input
									error
									onChange={event => {
										changeEmail(this, event);
									}}
									value={this.state.inputEmail}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputEmail}/>
							<Input
									type={'password'}
									error
									onChange={event => {
										changePassword(this, event);
									}}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputPassword}/>
						</div>

						<div className="auth-reg-page__buttons">
							<Button
									wrapper
									classWrapper={'auth-reg-page__button-wrapper'}
									color={'green'} value={this.props.dictionary.AuthRegPage.ButtonEnter}/>
							<Button
									wrapper
									link={'/registration'}
									classWrapper={'auth-reg-page__button-wrapper'}
									color={'red'} value={this.props.dictionary.AuthRegPage.ButtonReg}/>
						</div>
					</div>
				</div>
		);
	}
}

const mapStateToProps = state => ({
	dictionary: state.main.dictionary,
});

export default connect(mapStateToProps)(Authorization);