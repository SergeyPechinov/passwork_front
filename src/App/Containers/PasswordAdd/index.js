import React, {Component} from "react";
import './Style.scss';
import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";
import {addPassword, handleInputNamePassword, handleInputNameSite, handleInputPassword} from './Functions';
import {connect} from 'react-redux';

class PasswordAdd extends Component {
	state = {
		valueInputNamePassword: '',
		valueInputNameSite: '',
		valueInputPassword: '',

		successInputNameSite: false,
		successInputNamePassword: false,
		successInputPassword: false,

		buttonDisabled: false,
	};

	render() {
		return (
				<div className={'password-add container'}>
					<h2 className={'password-add__title title title--2'}>{this.props.dictionary.AddPasswordPage.Title}</h2>
					<div className="password-add-form">
						<Input class={'password-add-form__input'}
						       onChange={async (event) => {
							       await handleInputNamePassword(this, event);
						       }}
						       value={this.state.valueInputNamePassword}
						       success={this.state.successInputNamePassword}
						       error={!this.state.successInputNamePassword}
						       placeholder={this.props.dictionary.AddPasswordPage.InputNamePassword}/>
						<Input class={'password-add-form__input'}
						       onChange={async (event) => {
							       await handleInputNameSite(this, event);
						       }}
						       value={this.state.valueInputNameSite}
						       success={this.state.successInputNameSite}
						       error={!this.state.successInputNameSite}
						       placeholder={this.props.dictionary.AddPasswordPage.InputSite}/>
						<Input class={'password-add-form__input'}
						       onChange={async (event) => {
							       await handleInputPassword(this, event);
						       }}
						       value={this.state.valueInputPassword}
						       success={this.state.successInputPassword}
						       error={!this.state.successInputPassword}
						       placeholder={this.props.dictionary.AddPasswordPage.InputPassword}/>

						<Button class={'password-add-form__button'}
						        color={'green'}
						        disabled={this.state.buttonDisabled}
						        onClick={async () => {
						        	await addPassword(this);
						        }}
						        value={this.props.dictionary.Common.AddPassword}/>
					</div>
				</div>
		);
	}
}

const mapStateToProps = state => ({
	dictionary: state.main.dictionary,
	id: state.main.user_id,
});

export default connect(mapStateToProps)(PasswordAdd);