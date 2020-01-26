import React from 'react';
import PropTypes from 'prop-types';
import './Style.scss';
import {Link} from "react-router-dom";

const Button = props => {

	let copyProps = {...props};

	//удаляем лишнее (потому-что вставлено напрямую)
	delete copyProps['link'];
	delete copyProps['class'];
	delete copyProps['color'];
	delete copyProps['textColor'];
	delete copyProps['value'];
	delete copyProps['wrapper'];
	delete copyProps['classWrapper'];

	copyProps['className'] = `
							button
							button--${props.color}
							${props.textColor ? `button--text-${props.textColor}` : ''}
							${props.class}
							${props.wrapper ? 'button--w100' : ''}
					`;

	const button =
			props.link ?
					<Link to={props.link} {...copyProps}>{props.value}</Link>
					:
					<button {...copyProps}>{props.value}</button>;

	return (
			props.wrapper ?
					<div
							className={`${props.classWrapper}`}>
						{button}</div>
					:
					button
	);
};

Button.defaultProps = {
	class: '',
	classWrapper: '',
};

Button.propTypes = {
	link: PropTypes.string,
	class: PropTypes.string,
	color: PropTypes.PropTypes.oneOf(['green', 'red', 'blue', 'transparent']).isRequired,
	textColor: PropTypes.PropTypes.oneOf(['gray']),
	value: PropTypes.string,
	wrapper: PropTypes.bool,
	classWrapper: PropTypes.string,
};

export default Button;