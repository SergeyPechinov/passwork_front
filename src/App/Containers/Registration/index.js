import React, {Component} from "react";
import './Style.scss';
import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";
import {connect} from "react-redux";
import {changeEmail, changeName, changePassword, changePasswordConfirm} from "./Functions";

class Registration extends Component {
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
									error
									onChange={event => {
										changeName(this, event);
									}}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputName}/>
							<Input
									type={'password'}
									error
									onChange={event => {
										changePassword(this, event);
									}}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputPassword}/>
							<Input
									type={'password'}
									error
									onChange={event => {
										changePasswordConfirm(this, event);
									}}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputPasswordConfirm}/>
						</div>

						<div className="auth-reg-page__buttons">
							<Button
									wrapper
									classWrapper={'auth-reg-page__button-wrapper'}
									color={'green'} value={this.props.dictionary.AuthRegPage.ButtonReg}/>
							<Button
									wrapper
									link={'/'}
									classWrapper={'auth-reg-page__button-wrapper'}
									color={'red'} value={this.props.dictionary.AuthRegPage.ButtonEnter}/>
						</div>
					</div>
				</div>
		);
	}
}

const mapStateToProps = state => ({
	dictionary: state.main.dictionary,
});

export default connect(mapStateToProps)(Registration);