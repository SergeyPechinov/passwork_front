import React from 'react';
import './Style.scss';

const IconFolder = props => {
	return (
			<svg
					className={`icon-folder ${props.class ? props.class : ''}`}
					width="18"
					height="14"
					viewBox="0 0 18 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
				<path
						className={'icon-folder__path-top'}
						d="M0 4H18V10C18 12.2091 16.2091 14 14 14H4C1.79086 14 0 12.2091 0 10V4Z"
						fill="#484848"/>
				<path
						className={'icon-folder__path-bottom'}
						d="M0 2C0 0.895431 0.895431 0 2 0H7.07394C7.7105 0 8.30039 0.33399 8.6279 0.87984C8.86681 1.27801 9.24944 1.56929 9.69684 1.69357L10.5373 1.92704C10.7116 1.97545 10.8917 2 11.0726 2H16C17.1046 2 18 2.89543 18 4H0V2Z"
						fill="#AFAFAF"/>
			</svg>
	);
};

export default IconFolder