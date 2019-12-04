import styled from 'styled-components';

import {device} from '../../../constants/devise';

export const FormWrapper = styled.div`
	text-align: center;
  width: 230px;
	
	h1 {
		padding-top: 27px;
    padding-bottom: 20px;
		font-style: normal;
		font-weight: 900;
		font-size: 18px;
		line-height: 21px;
		color: #3E6373;
	}
	
	.describe {
		display: none;
	}
	
	input {
		width: 230px;
		height: 52px;
		background: #EEEEEE;
		border-radius: 8px;
		
		&, &::placeholder {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;
			color: #3E6373;
		}
	}
	
	.remember-wrapper {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    
		.remember-input {
			width: 20px;
			height: 20px;
			background: #EEEEEE;
			border-radius: 4px;
		}
	
		.remember {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;
			color: #3E6373;
		}
	}
	
	.mobile-forgot-password {
		display: none;
	}
	
	.footer {
		.submit {
			width: 230px;
	    background: #0D5C00;
	    border-radius: 8px;
	    font-style: normal;
	    font-weight: normal;
	    font-size: 18px;
	    line-height: 21px;
	    padding: 15px 55px;
	    
	    span {
	    	height: 22px;
		    font-family: Roboto;
		    font-style: normal;
		    font-weight: normal;
		    font-size: 18px;
		    line-height: 21px;
		    align-items: center;
		    color: #FFFFFF;
	    }
		}
		
		.wrapper-link {
			display: flex;
    	align-items: center;
    	justify-content: space-between;
    	padding-top: 15px;
    	
    	.break {
    		color: #9e9e9e;
    	}
		
			.link {
				font-style: normal;
				font-weight: normal;
				font-size: 14px;
				line-height: 16px;
		    text-decoration: none;
		    cursor: pointer;
				
				&.sign-up, &.sign-in {
					color: #117700;
				}
				
				&.forgot-password {
					color: #9e9e9e;
				}
			}
		}
	}
	
	@media ${device.mobileXL} {
		width: 375px;
		padding: 0 23px;
		
		h1 {
			font-weight: 500;
			font-size: 36px;
			line-height: 42px;
			color: #0D5701;
		}
		
		.describe {
			display: block;
			font-weight: 300;
			font-size: 22px;
			line-height: 26px;
			text-align: center;
			color: #000000;
			padding-bottom: 23px;
		}
		
		.field {
			width: 317.24px;
			margin: 0 auto;
			
			input {
				width: 317.24px;
				border: none;
				background: none;
				border-radius: 0;
				border-bottom: 0.5px solid #8D8D8D;
				padding: 0;
				outline: none;
			}
			
			input::placeholder {
				color: rgba(0, 0, 0, 0.8);
			}
			
			.form-error {
				padding-left: 0;
			}
			
			input, input::placeholder, .form-error {
				font-weight: 200;
				font-size: 18px;
				line-height: 21px;
			}
		}
		
		.remember-wrapper {
			display: none;
		}
		
		.mobile-forgot-password {
			display: block;
	    width: 317.24px;
	    margin: 0 auto;
	    text-align: left;
	    padding-top: 12px;
	    padding-bottom: 85px;
			
			.link {
				font-weight: 500;
				font-size: 16px;
				line-height: 19px;
				color: #0D5A00;
				text-decoration: none;
		    cursor: pointer;
			}
		}
		
		.footer {
			width: 317.24px;
			margin: 0 auto;
			
			button.submit {
				width: 312.58px;
				background: #117700;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-radius: 5px;
			}
			
			.wrapper-link {
				display: none;
			}
		}
		
		
	}
`;
