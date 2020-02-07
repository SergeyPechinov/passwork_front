import React from "react";
import './Style.scss';

const IconDelete = props => {
	return (
			<svg
					className={`icon-delete ${props.class ? props.class : ''}`}
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
				<path
						className={'icon-delete__path'}
						d="M5.05026 14.9497L14.9498 5.05025M5.05026 5.05025L14.9498 14.9497"
						stroke="#AFAFAF"
						strokeWidth="2"/>
			</svg>
	);
};

export default IconDelete;