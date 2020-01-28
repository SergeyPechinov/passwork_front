import React, {Component} from "react";
import './Style.scss';
import Input from "../../Components/UI/Input";
import Button from "../../Components/UI/Button";

class PasswordAdd extends Component {
	state = {
		valueInputNameSite: '',
		valueInputNamePassword: '',
		valueInputPassword: '',

		successInputNameSite: false,
		successInputNamePassword: false,
		successInputPassword: false,
	};

	handleInputNameSite = (event) => {
		this.setState({
			valueInputNameSite: event.target.value,
			successInputNameSite: event.target.value.length > 3,
		});
	};

	handleInputNamePassword = (event) => {
		this.setState({
			valueInputNamePassword: event.target.value,
			successInputNamePassword: event.target.value.length > 0,
		})
	};

	handleInputPassword = (event) => {
		this.setState({
			valueInputPassword: event.target.value,
			successInputPassword: event.target.value.length > 0,
		})
	};

	render() {
		return (
				<div className={'password-add container'}>
					<h2 className={'password-add__title title title--2'}>Добавить пароль</h2>
					<div className="password-add-form">
						<Input class={'password-add-form__input'}
						       onChange={(event) => {
							       this.handleInputNameSite(event);
						       }}
						       value={this.state.valueInputNameSite}
						       success={this.state.successInputNameSite}
						       error={!this.state.successInputNameSite}
						       placeholder={'Сайт'}/>
						<Input class={'password-add-form__input'}
						       onChange={(event) => {
							       this.handleInputNamePassword(event);
						       }}
						       value={this.state.valueInputNamePassword}
						       success={this.state.successInputNamePassword}
						       error={!this.state.successInputNamePassword}
						       placeholder={'Название пароля'}/>
						<Input class={'password-add-form__input'}
						       onChange={(event) => {
							       this.handleInputPassword(event);
						       }}
						       value={this.state.valueInputPassword}
						       success={this.state.successInputPassword}
						       error={!this.state.successInputPassword}
						       placeholder={'Проль'}/>

						<Button class={'password-add-form__button'} color={'green'} value={'Добавить'}/>
					</div>
				</div>
		);
	}
}

export default PasswordAdd;