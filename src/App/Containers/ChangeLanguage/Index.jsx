import React, {Component} from "react";
import './Functions';
import './Style.scss';
import Button from "../../Components/Button";

class ChangeLanguage extends Component {

	render() {
		return(
				<div>
					<Button color={'blue'} value={'РУССКИЙ'}/>
					<Button color={'red'} value={'РУССКИЙ'}/>
				</div>
		);
	}
}

export default ChangeLanguage;