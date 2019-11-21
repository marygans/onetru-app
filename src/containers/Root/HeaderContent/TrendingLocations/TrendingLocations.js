import React from 'react';
import {TrendingLocationsWrapper} from './TrendingLocations.style';

const TrendingLocations = () => {
  return (
      <TrendingLocationsWrapper>
        <span className="locations">Trending locations:</span>
        <span>
            <a>Seattle,</a>
            <a>Chicago,</a>
            <a>Austin</a>
        </span>
      </TrendingLocationsWrapper>
  );
};

export default TrendingLocations;
export { TrendingLocations };
