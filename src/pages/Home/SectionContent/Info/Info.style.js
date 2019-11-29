import styled from 'styled-components';

import {THEME} from '../../../../constants/theme';
import {ICONS} from '../../../../constants/resources';
import {device} from '../../../../constants/devise';

const { colors } = THEME;

export const InfoWrapper = styled.div`
  color: ${colors.black};
  font-size: 32px;
  line-height: 37px;
  width: 450px;
  text-align: center;
    
  .icon-wrapper {
    background: url("${props => ICONS[props.typeIcons]["ELLIPSE"]}") no-repeat center;
    height: 277px;
    display: flex;
    width: 277px;
    align-items: center;
    margin: 0 auto;
    
    .icon {
      background: url("${props => ICONS[props.typeIcons][props.type]}") no-repeat center;
      height: 133px;
      width: 133px;
      margin: 0 auto;
      
      &.SEARCH {
        margin-right: 85px;
      }
    }
  }
  
  .short-title {
    font-weight: bold;
    padding-top: 15px;
  }
  
  .describe {
  	padding-top: 20px;
  }
  
  @media ${device.laptop} {
  	width: 350px;
  }
  
  @media ${device.laptopL} {
  	width: 300px;
  	
  	.icon-wrapper {
  		height: 195px;
			width: 195px;
			background-size: 86%;
			
  		.icon {
  			height: 100px;
				width: 100px;
				background-size: 75%;
				
				&.SEARCH {
					margin-right: 54px;
				}
  		}
  	}
  	
  	.short-title, .describe {
  		font-size: 24px;
      line-height: 30px;
  	}
  	
  	.describe {
  		padding-top: 10px;
  	}
  }

`;
