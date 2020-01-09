import React, {Component} from "react";
import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";
import {btnEnter, changeEmail, changePassword} from "./Functions";
import {setToken} from "../../../Redux/Actions/Main";
import {connect} from "react-redux";

class Authorization extends Component {
	state = {
		inputEmail: '',
		inputPassword: '',

		inputEmailError: true,
		inputPasswordError: true,

		inputEmailErrorText: '',
		inputPasswordErrorText: '',

		inputEmailSuccess: false,
		inputPasswordSuccess: false,

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
										changePassword(this, event);
									}}
									type={'password'}
									success={this.state.inputPasswordSuccess}
									error={this.state.inputPasswordError}
									errorMessage={this.state.inputPasswordErrorText}
									classWrapper={'auth-reg-page__input-wrapper'}
									placeholder={this.props.dictionary.AuthRegPage.InputPassword}/>
						</div>

						{this.state.pageErrorText ?
								<p className="auth-reg-page__error">
									{this.state.pageErrorText}
								</p>
								: null}

						<div className="auth-reg-page__buttons">
							<Button
									onClick={async () => {
										await btnEnter(this);
									}}
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

const mapDispatchToProps = {
	setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);