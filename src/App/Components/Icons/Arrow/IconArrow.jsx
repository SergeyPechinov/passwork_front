import React from 'react';
import './Style.scss';

const IconArrow = () => {
	return (
			<svg
					className={'icon-arrow'}
					width="16"
					height="10"
					viewBox="0 0 16 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
				<path
						className={'icon-arrow__path'}
						d="M1 1L8 8L15 1"
						stroke="#AFAFAF"
						stroke-width="2"/>
			</svg>
	);
};

export default IconArrow;