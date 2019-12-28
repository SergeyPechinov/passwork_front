import React from 'react';
import './style.scss';

const Button = props => {
	let copyProps = {...props};

	//удаляем лишнее (потому-что вставлено напрямую)
	delete copyProps['class'];
	delete copyProps['color'];
	delete copyProps['value'];

	return (
			<button
					className={`
							button
							button--${props.color}
							${props.class ? props.class : ''}`}
					{...copyProps}
			>
				{props.value}
			</button>
	);
};

export default Button;