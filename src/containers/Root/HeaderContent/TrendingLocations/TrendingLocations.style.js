import styled from 'styled-components';

import {THEME} from '../../../../constants/theme';

const { text } = THEME;

export const TrendingLocationsWrapper = styled.div`
  color: ${text.invert};
  padding-bottom: 120px;
  padding-top: 12px;
  
  .locations {
    margin-right: 5px;
  }
  
  a {
    text-decoration: underline;
    margin-right: 5px;
  }
`;
