import React from 'react';
import {FirstBlockContentStyle} from './FirstBlockContent.style';
import FindPropertyManagers from './FindPropertyManagers/FindPropertyManagers';
import TrendingLocations from './TrendingLocations/TrendingLocations';
import {CONTEXT} from '../../../constants/context';

const FirstBlockContent = ({ sectionType }) => {
  const {
	  first_part_title,
	  second_part_title,
	  description,
	  placeholder,
	  trendingLocation,
	  button,
  } = CONTEXT[sectionType.toUpperCase()];

  return (
      <FirstBlockContentStyle>
          <div className="wrapper">
	          <div className="info-wrapper">
		          <div className="big-describe">
			          <div>{first_part_title}</div>
			          <div>{second_part_title}</div>
		          </div>
		          <div className="small-describe">
			          <span>{description}</span>
		          </div>
		          <FindPropertyManagers placeholder={placeholder} button={button} />
		          <TrendingLocations trendingLocation={trendingLocation} />
	          </div>
          </div>
      </FirstBlockContentStyle>
  );
};

export default FirstBlockContent;
export { FirstBlockContent };
