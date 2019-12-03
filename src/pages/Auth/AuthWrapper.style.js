import styled from 'styled-components';

import {ICONS} from '../../constants/resources';

const { AUTH } = ICONS;

export const AuthWrapper = styled.div`
 	position: relative;
	z-index: 11;
  width: 710px;
  margin: 300px auto 0;
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px #DCDCDC;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 15px;
  
  #firebaseui_container .firebaseui-card-content {
  	padding: 0;
  	
  	.firebaseui-idp-button {
  		width: 230px;
			height: 52px;
			border-radius: 8px;
  	}
  	
  	.firebaseui-idp-text	{
  		color: #FFFFFF;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;
  	}
  	
  	.firebaseui-idp-google,
  	.firebaseui-idp-google:hover,
  	.mdl-button.firebaseui-idp-google:active,
  	.mdl-button.firebaseui-idp-google:focus {
  		background: #DF4930 !important;
  		
  		.firebaseui-idp-icon {
  			content:url(${AUTH.GOOGLE});
  			width: 17.68px;
				height: 17.82px;
  		}
  	}

  	.firebaseui-idp-facebook,
  	.firebaseui-idp-facebook:hover,
  	.mdl-button.firebaseui-idp-facebook:active,
  	.mdl-button.firebaseui-idp-facebook:focus {
  		background: #507CC0 !important;
  		
  		.firebaseui-idp-icon {
				content:url(${AUTH.FACEBOOK});
				width: 17.68px;
				height: 17.82px;
			}
  	}
  }
  
  .circleWrapper {
  	height: 203px;
    border-right: 1px solid #DCDCDC;
    position: relative;
    
    .circle {
    	width: 49px;
	    height: 49px;
	    background: #FFFFFF;
	    border: 1px solid #DCDCDC;
	    border-radius: 50%;
	    position: absolute;
	    top: 85px;
	    right: -26px;
			
			div {
				text-align: center;
    		padding-top: 16px;
    		font-style: normal;
				font-weight: normal;
				font-size: 14px;
				line-height: 16px;
				color: #3E6373;
			}
    }
  }
`;
