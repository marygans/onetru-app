import styled from 'styled-components';

import {THEME} from '../../../../../constants/theme';

const { colors } = THEME;

export const ItemWrapper = styled.div`
	max-width: 393px;
	border: 1px solid ${colors.whiteWithEasilyGray};
	box-sizing: border-box;
	background: ${colors.white};
	
	.image-wrapper {
			img {
				width: 100%;
			}
	}
	
	.detail-wrapper {
	    padding: 0 10px 19px;
	    
	    .name {
	    	font-weight: bold;
				font-size: 30px;
				line-height: 35px;
				color: #303030;
	    }
	    
	    .type-wrapper {
        padding: 15px 0 24px;
        
        .serviceType, .managementType {
		      border: 2px solid ${colors.success};
					box-sizing: border-box;
					border-radius: 11px;
					font-style: normal;
					font-weight: normal;
					font-size: 24px;
					line-height: 28px;
					color: ${colors.success};
					padding: 10px 25px;
	        display: inline-block;
		    }
		    
		    .serviceType {
		      margin-right: 10px;
		    }
		  
	    }
	    
	    
	    
	    .button-wrapper {
				.btn {
					font-weight: 500;
					font-size: 18px;
					line-height: 21px;
					border: 2px solid ${colors.success};
					box-sizing: border-box;
					border-radius: 3px;
					padding: 19px 18px;
					
					&.compare {
						color: ${colors.success};
						background-color: ${colors.white};
						margin-right: 16px;
					}
					
					&.send-a-message {
						color: ${colors.white};
					}
				}
			}
			
			.compare-wrapper {
	      padding: 25px 25px 0 25px;
		    display: flex;
		    justify-content: flex-end;
			
				.compare-input {
					width: 26.97px;
					height: 25.44px;
					border: 1px solid ${colors.grayEasyLight};
					box-sizing: border-box;
					border-radius: 4px;
				}
			
				.compare {
					font-style: normal;
					font-weight: normal;
					font-size: 24px;
					line-height: 28px;
					color: ${colors.whiteWithEasilyGray};
				}
			}
	}
	
	.footer {
		border-top: 1px solid ${colors.whiteWithEasilyGray};
    align-items: center;
    display: flex;
    font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 23px;
		
		color: ${colors.grayEasyDark};
    
    img {
    	padding-left: 18px;
    }
    
    .startingAt {
    	padding-right: 12px;
    }
    
    .perMonth, .startPrice {
    	color: ${colors.grayEasyDark};
    	font-weight: bold;
    }
    
    .startPrice {
    	padding-right: 10px;
    }
	}
	
	
`;
