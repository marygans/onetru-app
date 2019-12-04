import styled from 'styled-components';

import {ICONS} from '../../constants/resources';
import {device} from '../../constants/devise';

const { AUTH } = ICONS;

export const AuthWrapper = styled.div`
 	position: relative;
  width: 710px;
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px #DCDCDC;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 15px;
  
  .link-mobile-wrapper {
  	display: none;
  }

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
  
  .btn.browse-as-guest {
  	display: none;
  }
  
  @media ${device.tabletM} {
  	border: none;
  	box-shadow: none;
  	width: 100%;
  	padding: 0 20px 15px;
  }
  
  @media ${device.mobileXL} {
  	flex-direction: column-reverse;
  	
  	.circleWrapper {
  		display: none;
  	}
  	
  	#firebaseui_container {
  		width: 317.24px;
  		
	    .firebaseui-card-content {
	    	.firebaseui-list-item {
	    		.firebaseui-idp-button {
			      width: 100%;
	          max-width: 100%;
						height: 48.87px;
						border-radius: 5px;
						display: flex;
    				justify-content: center;
    				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			    }
	    	}
	    	
	    }
  	}
  	
  	.btn.browse-as-guest {
  		display: block;
  		width: 312.58px;
  		height: 48.87px;
  		border: 1px solid #0E6000;
			box-sizing: border-box;
			box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
			border-radius: 5px;
			background: white;
			
			span {
				font-style: normal;
				font-weight: 500;
				font-size: 18px;
				line-height: 21px;
				color: #0D5C00;
			}
  	}
  	
  	.link-mobile-wrapper {
	    display: block;
	    width: 317.24px;
      text-align: center;
    	padding-top: 18px;
	    
	    .link {
	    	font-weight: 500;
				font-size: 16px;
				line-height: 19px;
				color: #0D5A00;
				text-decoration: none;
	    }
	  }
   
  	
  }
  
  @media ${device.mobileL} {
		padding: 0 15px;
		
		.btn.browse-as-guest, #firebaseui_container {
			width: 100%;
		}
	}
`;
