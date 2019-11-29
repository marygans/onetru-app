import styled from 'styled-components';

import {THEME} from '../../../constants/theme';
import {device} from '../../../constants/devise';

const { colors } = THEME;

export const SectionContentStyle = styled.div`
  padding: 61px 50px;
  color: ${colors.black};
  text-align: center;
  
  @media ${device.laptop} {
     padding: 20px 20px;
  }
  
  &.LANDLORD {
  	background-color: ${colors.matte};
  }
  
  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    padding-bottom: 65px;
    
    @media ${device.laptop} {
    	 font-size: 46px;
       line-height: 52px;
       padding-bottom: 30px;
    }
    
    @media ${device.mobileXL} {
    	font-size: 32px;
    	line-height: 38px;
    }
  }
  
  .info-wrapper {
    display: flex;
    justify-content: space-around;
    
    @media ${device.tablet} {
			flex-direction: column;
	   	align-items: center;
	  }
  }
  
  
 
`;
