import React, {Component} from "react";
import './Style.scss';
import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";
import {
	addPassword,
	handleInputNamePassword,
	handleInputNameSite,
	handleInputPassword
} from './Functions';
import {connect} from 'react-redux';
import IconFolder from "../../Components/UI/Icons/Folder/iconFolder";
import IconsPlus from "../../Components/UI/Icons/Plus/iconPlus";
import IconDelete from "../../Components/UI/Icons/Delete/iconDelete";
import IconApply from "../../Components/UI/Icons/Apply/iconApply";
import FoldersBlock from "../../Components/Folders/FoldersBlock";

class PasswordAdd extends Component {
	state = {
		valueInputNameSite: '',
		valueInputNamePassword: '',
		valueInputPassword: '',

		successInputNamePassword: false,
		successInputNameSite: false,
		successInputPassword: false,

		messageInputNamePassword: '',
		messageInputNameSite: '',
		messageInputPassword: '',

		buttonDisabled: true,
	};

	render() {
		return (
				<div className={'password-add container'}>
					<h2 className={'password-add__title'}>{this.props.dictionary.AddPasswordPage.Title}</h2>
					<div className="password-add__inner">
						<div className="password-add-form">
							<Input class={'password-add-form__input'}
							       onChange={async (event) => {
								       await handleInputNamePassword(this, event);
							       }}
							       value={this.state.valueInputNamePassword}
							       success={this.state.successInputNamePassword}
							       error={!this.state.successInputNamePassword}
							       errorMessage={this.state.messageInputNamePassword}
							       placeholder={this.props.dictionary.AddPasswordPage.InputNamePassword}/>
							<Input class={'password-add-form__input'}
							       onChange={async (event) => {
								       await handleInputNameSite(this, event);
							       }}
							       value={this.state.valueInputNameSite}
							       success={this.state.successInputNameSite}
							       error={!this.state.successInputNameSite}
							       errorMessage={this.state.messageInputNameSite}
							       placeholder={this.props.dictionary.AddPasswordPage.InputSite}/>
							<Input class={'password-add-form__input'}
							       onChange={async (event) => {
								       await handleInputPassword(this, event);
							       }}
							       value={this.state.valueInputPassword}
							       success={this.state.successInputPassword}
							       error={!this.state.successInputPassword}
							       errorMessage={this.state.messageInputPassword}
							       placeholder={this.props.dictionary.AddPasswordPage.InputPassword}/>
							<Button class={'password-add-form__button'}
							        color={'green'}
							        disabled={this.state.buttonDisabled}
							        onClick={async () => {
								        await addPassword(this);
							        }}
							        value={this.props.dictionary.Common.AddPassword}/>
						</div>
						<FoldersBlock class={'password-add__folders'}/>
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