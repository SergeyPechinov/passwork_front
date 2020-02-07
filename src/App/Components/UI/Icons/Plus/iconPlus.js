import React from "react";
import './Style.scss';

const IconsPlus = props => {
	return (
			<svg
					className={`icon-plus ${props.class ? props.class : ''}`}
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
				<path
						className={'icon-plus__path'}
						d="M4 10H16M10 4V16"
						stroke="#AFAFAF"
						strokeWidth="2"/>
				<circle
						className={'icon-plus__path'}
						cx="10"
						cy="10"
						r="9"
						stroke="#AFAFAF"
						strokeWidth="2"/>
			</svg>
	);
};

export default IconsPlus;