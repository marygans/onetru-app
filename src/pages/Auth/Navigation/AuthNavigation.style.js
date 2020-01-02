import styled from 'styled-components';

import {device} from '../../../constants/devise';

export const AuthNavigationWrapper = styled.div`
	position: relative;
	z-index: 11;
  margin: 300px auto 0;
  
  .tabs {
	  &.desktop {
			display: grid;	  
	  }
	  
  	&.mobile {
	    display: none;
	  }
  }
  
  
  @media ${device.laptop} {
  	margin: 200px auto 0;
  }
  
  @media ${device.tabletM} {
    margin: 58px 0;
    
    .tabs {
    	&.mobile {
		    display: grid;
		  }
		  
		  &.desktop {
				display: none;	  
		  }
    }
  }
  
  .body {
 	 	position: relative;
  	background: #FFFFFF;
	  border: 1px solid #DCDCDC;
	  box-sizing: border-box;
	  box-shadow: 0px 2px 4px #DCDCDC;
	  border-radius: 8px;
	  padding: 0 40px 15px;
    text-align: center;
    
    h1 {
    	padding-top: 17px;
	    font-weight: 900;
			font-size: 24px;
			line-height: 28px;
			color: #0D5701;
    }
	  
	  @media ${device.tabletM} {
		  border: none;
		  box-shadow: none;
		  width: 100%;
		  padding: 0 20px 15px;
	  }
	  
	  @media ${device.mobileL} {
		  padding: 0 15px;
		}
  
  }
	
	.tab-list {
		color: #0E6000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    padding-bottom: 6px;
		
	.tab-list-item {
      padding: 15px 5px 7px;
      border-bottom: 1px solid #DBDBDB;
      cursor: pointer;
      
      &.tab-list-active {
        border-bottom: 3px solid #0E6000;
      }
    }
	}

`;
