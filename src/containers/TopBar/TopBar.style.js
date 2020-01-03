import styled from 'styled-components';

import { THEME } from '../../constants/theme';
import {ICONS} from '../../constants/resources';
import {device} from '../../constants/devise';
import {OVERLAY_STYLE_CLASSES} from '../../constants/overlay';

const { text } = THEME;
const { HEADER } = ICONS;

export const WrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  padding: 18px 38px 18px 64px;
  
  .left {
    display: flex;
  	justify-content: flex-start;
  	align-items: center;
  	
  	a.link-wrapper-by-logo {
  		padding: 0;
  	}
  	
  	.logos-wrapper {
  		width: 117px;
  		height: 42px;
  		
  		.logo {
		    height: 100%;
		    position: relative;
		    display: block;
        background: url(${HEADER.FULL_LOGO_WHITE}) no-repeat center;
        background-size: 100%;
  		}
  	
  	}
  	
  }
  
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    .btn {
      margin-right: 25px;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 9px 23px;
      
      &.link {
      	width: auto;
      	background: none;
      	box-shadow: none;
      }
    }
    
    .link {
      color: ${text.invert};
      font-size: 18px;
      line-height: 21px;
      cursor: pointer;
    }
  }
  
  .left, .right {
      a {
        color: ${text.invert};
        margin-right: 32px;
        font-size: 18px;
        line-height: 21px;
        text-decoration: none;
        border-left: 1px solid;
        padding-left: 18px;
        
        &.link-wrapper-by-logo {
	        border: 0;
	      }
      }
      
      a:last-child {
        margin-right: 0;
      }
  }
  
  &.changed {
  	background-color: ${text.success};
  	
  	.btn {
  		background-color: ${text.invert};
  		color: ${text.success};
  		
  		&.link {
  			color: white;
  		}
  	}
  }
  
  @media ${device.laptopT} {
  	padding: 18px 42px 18px 42px;
  }
  
  &.${OVERLAY_STYLE_CLASSES.AUTH} {
	  @media ${device.tabletM} {
		  flex-direction: column;
      align-items: center;
      padding: 8px 0;
      
      .right {
      	display: none;
      }
	  }
  }
  
  @media ${device.tablet} {
  	.right {
  		.btn.header-button {
  			width: 146px;
  			font-size: 12px;
  			margin-right: 15px;
  		}
  		
  		a.link {
  		  font-size: 12px;
  		  padding-left: 15px;
        margin-right: 15px;
      }
  	}
  }

  
  @media ${device.mobileXL} {
   & {
   	padding: 18px 15px 18px 15px;
   }
  }
  
  @media ${device.mobileT} {
  	& {
  		flex-direction: column;
      align-items: center;
      
      .left {
      	padding-bottom: 15px;
      }
      
      .right {
	      .btn {
	      	padding: 9px 0;
	      }
	      
	      a.link {
	      	padding-left: 13px;
    			margin-right: 13px;
	      }
      }
  	}
  }
  
  &.${OVERLAY_STYLE_CLASSES.AUTH} {
   @media ${device.tabletM} {
	   	.left {
	   		padding-bottom: 0;
	   	}
	  }
  }
  
`;



