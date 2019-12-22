import React from 'react';
import './Style.scss';

const IconSearch = () => {
		return (
				<svg
						className={'icon-search'}
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
					<path
							className={'icon-search__path'}
							d="M20 20L14 14"
							stroke="#AFAFAF"
							stroke-width="2"/>
					<circle
							className={'icon-search__circle'}
							cx="8.5"
							cy="8.5"
							r="7.5"
							stroke="#AFAFAF"
							stroke-width="2"/>
				</svg>
		);
};

export default IconSearch;