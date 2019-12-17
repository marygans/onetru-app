import React from 'react';

import {HighlightsStyle, IconStyle} from './Highlights.style';

const Highlights = ({highlights}) => {

	return (
		<HighlightsStyle>
			<div className="title">Highlights</div>
			<div className="icons">
				{
					highlights ? highlights.map((highlight, i) => (
						<div className="icon-wrapper" key={i + highlight.name}>
							<IconStyle className="icon" iconPath={highlight.image}></IconStyle>
							<div className="name">{highlight.name}</div>
						</div>
					)) : null
				}
			</div>
		</HighlightsStyle>
	);

};

export default Highlights;
export { Highlights };
