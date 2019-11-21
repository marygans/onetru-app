import React from 'react';
import {HeaderContentStyle} from './HeaderContent.style';
import FindPropertyManagers from './FindPropertyManagers/FindPropertyManagers';
import TrendingLocations from './TrendingLocations/TrendingLocations';

const HeaderContent = () => {
  return (
      <HeaderContentStyle>
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
      </HeaderContentStyle>
  );
};

export default HeaderContent;
export { HeaderContent };
