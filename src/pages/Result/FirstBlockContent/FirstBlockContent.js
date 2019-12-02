import React from 'react';
import {FirstBlockContentStyle} from './FirstBlockContent.style';
import {CONTEXT} from '../../../constants/context';

const FirstBlockContent = ({ sectionType }) => {
  const { title, description } = CONTEXT[sectionType.toUpperCase()];
	const found = 21;
	const near = 98122;

  return (
      <FirstBlockContentStyle id="first-block-on-landing-page">
          <div className="wrapper">
	          <div className="info-wrapper">
		          <div className="big-describe">
			          <span className="counter-of-result">{found}</span>
			          <span>{title}</span>
			          <span className="counter-all-managers">{near}</span>
		          </div>
		          <div className="small-describe">
			          <span>{description}</span>
		          </div>
	          </div>
          </div>
      </FirstBlockContentStyle>
  );
};

export default FirstBlockContent;
export { FirstBlockContent };
