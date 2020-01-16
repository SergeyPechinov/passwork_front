import React, {Component} from "react";
import './Style.scss';
import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";
import {connect} from "react-redux";
import {loaderOpen, loaderHidden} from "../../../Redux/Actions/Loader";
import {
	btnRegistration,
	changeEmail,
	changeName,
	changePassword,
	changePasswordConfirm
} from "./Functions";

class Registration extends Component {
	state = {
		inputEmail: '',
		inputName: '',
		inputPassword: '',
		inputPasswordConfirm: '',

		inputEmailError: true,
		inputNameError: true,
		inputPasswordError: true,

		inputEmailSuccess: false,
		inputNameSuccess: false,
		inputPasswordSuccess: false,

		inputEmailErrorText: '',
		inputNameErrorText: '',
		inputPasswordErrorText: '',

		pageErrorText: '',
	};

	render() {
		return (
				<div className={'auth-reg-page'}>
					<div className={'auth-reg-page__inner'}>
						<div className="auth-reg-page__inputs">
							<Input
									onChange={event => {
										changeEmail(this, event);
									}}
									type={'email'}
									success={this.state.inputEmailSuccess}
									error={this.state.inputEmailError}
									errorMessage={this.state.inputEmailErrorText}
									value={this.state.inputEmail}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputEmail}/>
							<Input
									onChange={event => {
										changeName(this, event);
									}}
									success={this.state.inputNameSuccess}
									error={this.state.inputNameError}
									errorMessage={this.state.inputNameErrorText}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputName}/>
							<Input
									onChange={event => {
										changePassword(this, event);
									}}
									type={'password'}
									success={this.state.inputPasswordSuccess}
									error={this.state.inputPasswordError}
									errorMessage={this.state.inputPasswordErrorText}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputPassword}/>
							<Input
									onChange={event => {
										changePasswordConfirm(this, event);
									}}
									type={'password'}
									success={this.state.inputPasswordSuccess}
									error={this.state.inputPasswordError}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputPasswordConfirm}/>
						</div>

						{this.state.pageErrorText ?
								<p className="auth-reg-page__error">
									{this.state.pageErrorText}
								</p>
								: null}

						<div className="auth-reg-page__buttons">
							<Button
									onClick={async () => {
										await btnRegistration(this);
									}}
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

const mapDispatchToProps = {
	loaderOpen,
	loaderHidden
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);