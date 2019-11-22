import React from 'react';

import {TrendingLocationsWrapper} from './TrendingLocations.style';

const TrendingLocations = () => {
  return (
      <TrendingLocationsWrapper>
        <span className="locations">Trending locations:</span>
        <span>
            <span className="location">Seattle,</span>
            <span className="location">Chicago,</span>
            <span className="location">Austin</span>
        </span>
      </TrendingLocationsWrapper>
  );
};

export default TrendingLocations;
export { TrendingLocations };
