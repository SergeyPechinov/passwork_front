import React from 'react';
import './Style.scss';

const IconTheme = () => {
		return (
				<svg
						className={'icon-theme'}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
					<path
							className={'icon-theme__path'}
							d="M20 9.99999C20 13.2716 18.4289 16.1763 16 18.0007C14.3287 19.2561 8.25121 19 6 19C6 19 12 15.5228 12 9.99999C12 4.47714 6 0.999981 6 0.999981C8.25165 0.999981 14.3295 0.74417 16.001 1.99999C18.4293 3.82445 20 6.72879 20 9.99999Z"
							fill="#484848"/>
					<circle
							className={'icon-theme__circle'}
							cx="10"
							cy="10"
							r="9"
							stroke="#AFAFAF"
							stroke-width="2"/>
				</svg>
		);
};

export default IconTheme;