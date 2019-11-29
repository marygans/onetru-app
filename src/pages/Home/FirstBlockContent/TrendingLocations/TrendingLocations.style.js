import styled from 'styled-components';

import {THEME} from '../../../../constants/theme';
import {device} from '../../../../constants/devise';

const { text } = THEME;

export const TrendingLocationsWrapper = styled.div`
  color: ${text.invert};
  padding-bottom: 120px;
  padding-top: 12px;
  
  @media ${device.laptopT} {
     padding-bottom: 60px;
  }
  
  .locations {
    margin-right: 5px;
  }
  
  .location {
    text-decoration: underline;
    margin-right: 5px;
  }
  
  @media ${device.mobileL} {
  	padding-bottom: 0px;
  }
 
`;
