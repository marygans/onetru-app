import styled from 'styled-components';

import {device} from '../../../constants/devise';

export const AuthNavigationWrapper = styled.div`
	position: relative;
	z-index: 11;
  margin: 300px auto 0;
  
  @media ${device.laptop} {
  	margin: 200px auto 0;
  }
  
  @media ${device.tabletM} {
    margin: 50px 0;
  }
	
	.tabs {
		display: none;
		
		@media ${device.tabletM} {
			color: #0E6000;
	    display: grid;
	    grid-template-columns: 1fr 1fr;
	    
	    .tab {
	      padding: 15px 5px;
	      border-bottom: 1px solid #DBDBDB;
	      
	      &.active {
	        border-bottom: 4px solid #0E6000;
	      }
	    }
		}
		
	}
`;
