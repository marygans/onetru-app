import styled from 'styled-components';

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
`;
