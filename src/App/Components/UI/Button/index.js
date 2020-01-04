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
	delete copyProps['value'];
	delete copyProps['wrapper'];
	delete copyProps['classWrapper'];

	copyProps['className'] = `
							button
							button--${props.color}
							${props.class ? props.class : ''}
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
							className={`${props.classWrapper ? props.classWrapper : ''}`}>
						{button}</div>
					:
					button
	);
};

export default Button;