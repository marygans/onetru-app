import React from 'react';

import {TrendingLocationsWrapper} from './TrendingLocations.style';

const TrendingLocations = ({ trendingLocation }) => {
  const { name, locations } = trendingLocation;

  return (
      <TrendingLocationsWrapper>
        <span className="locations">{name}:</span>
        <span>
          {
            locations.map((location, i) => (
              <span className="location" key={location + i}>
                {location.name}
                {
                  i < locations.length - 1 ? (
                    <>,</>
                  ) : null
                }
              </span>
            ))
          }
        </span>
      </TrendingLocationsWrapper>
  );
};

export default TrendingLocations;
export { TrendingLocations };
