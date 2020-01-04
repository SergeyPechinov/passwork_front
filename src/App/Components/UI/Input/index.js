import React from "react";
import './Style.scss';

const Input = props => {
	let copyProps = {...props};

	delete copyProps['type'];
	delete copyProps['class'];
	delete copyProps['success'];
	delete copyProps['error'];
	delete copyProps['errorMessage'];
	delete copyProps['classWrapper'];

	return (
			<div className={`input ${props.classWrapper ? props.classWrapper : ''}`}>
				<input
						className={`
						input__item
						${props.class ? props.class : ''}
						${props.success ? 'input__item--success' : ''}
						${props.error ? 'input__item--error' : ''}
					`}
						type={props.type ? props.type : 'text'}
						{...copyProps}
				/>
				{props.errorMessage ?
						<p className="input__error">{props.errorMessage}</p>
						: null}
			</div>
	);
};

export default Input;


