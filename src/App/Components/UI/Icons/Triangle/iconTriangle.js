import React from 'react';
import './Style.scss';

const IconTriangle = () => {
	return (
			<svg
					className={'icon-triangle'}
					width="16"
					height="8"
					viewBox="0 0 16 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
				<path
						className={'icon-triangle__path'}
						d="M7.64645 6.93934L2.06066 1.35355C1.74568 1.03857 1.96876 0.5 2.41421 0.5H13.5858C14.0312 0.5 14.2543 1.03857 13.9393 1.35355L8.35355 6.93934C8.15829 7.1346 7.84171 7.1346 7.64645 6.93934Z"
						fill="#AFAFAF"
						stroke="#AFAFAF"/>
			</svg>
	);
};

export default IconTriangle;