import React from 'react';
import {FirstBlockContentStyle} from './FirstBlockContent.style';
import FindPropertyManagers from './FindPropertyManagers/FindPropertyManagers';
import TrendingLocations from './TrendingLocations/TrendingLocations';

const FirstBlockContent = () => {
  return (
      <FirstBlockContentStyle>
          <div className="info-wrapper">
              <div className="big-describe">
                  <div>Find and compare local</div>
                  <div>Property Managers</div>
              </div>
              <div className="small-describe">
                  <span>Find the perfect property manager for your property today.</span>
              </div>
          </div>
          <FindPropertyManagers />
          <TrendingLocations />
      </FirstBlockContentStyle>
  );
};

export default FirstBlockContent;
export { FirstBlockContent };
