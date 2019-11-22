import React from 'react';
import {FirstBlockContentStyle} from './FirstBlockContent.style';
import FindPropertyManagers from './FindPropertyManagers/FindPropertyManagers';
import TrendingLocations from './TrendingLocations/TrendingLocations';
import {CONTEXT} from '../../../constants/context';

const FirstBlockContent = ({ sectionType }) => {
  const { title, description, placeholder, trendingLocation, button } = CONTEXT[sectionType.toUpperCase()];

  return (
      <FirstBlockContentStyle>
          <div className="info-wrapper">
              <div className="big-describe">
                  <div>{title}</div>
              </div>
              <div className="small-describe">
                  <span>{description}</span>
              </div>
          </div>
          <FindPropertyManagers placeholder={placeholder} button={button} />
          <TrendingLocations trendingLocation={trendingLocation} />
      </FirstBlockContentStyle>
  );
};

export default FirstBlockContent;
export { FirstBlockContent };
