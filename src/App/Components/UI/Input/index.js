import React from "react";
import './Style.scss';
import PropTypes from 'prop-types';

const Input = props => {
	let copyProps = {...props};

	delete copyProps['type'];
	delete copyProps['class'];
	delete copyProps['success'];
	delete copyProps['error'];
	delete copyProps['errorMessage'];
	delete copyProps['classWrapper'];

	copyProps['className'] = `
						input__item
						${props.class}
						${props.success ? 'input__item--success' : ''}
						${props.error ? 'input__item--error' : ''}
					`;

	copyProps['type'] = props.type;

	return (
			<div className={`input ${props.classWrapper}`}>
				<input {...copyProps}/>
				{props.errorMessage ?
						<p className="input__error">{props.errorMessage}</p>
						: null}
			</div>
	);
};

Input.defaultProps = {
	type: 'text',
	classWrapper: '',
	class: '',
};

Input.propTypes = {
	type: PropTypes.string,
	class: PropTypes.string,
	success: PropTypes.bool,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	classWrapper: PropTypes.string,
};

export default Input;


