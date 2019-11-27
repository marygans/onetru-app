import styled from 'styled-components';

export const ItemWrapper = styled.div`
	max-width: 393px;
	border: 1px solid #E5E5E5;
	box-sizing: border-box;
	background: #FFFF;
	
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
		      border: 2px solid #117700;
					box-sizing: border-box;
					border-radius: 11px;
					font-style: normal;
					font-weight: normal;
					font-size: 24px;
					line-height: 28px;
					color: #117700;
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
					border: 2px solid #117700;
					box-sizing: border-box;
					border-radius: 3px;
					padding: 19px 18px;
					
					&.compare {
						color: #117700;
						background-color: #FFF;
						margin-right: 16px;
					}
					
					&.send-a-message {
						color: #FFFFFF;
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
					border: 1px solid #AFAFAF;
					box-sizing: border-box;
					border-radius: 4px;
				}
			
				.compare {
					font-style: normal;
					font-weight: normal;
					font-size: 24px;
					line-height: 28px;
					color: #AFAFAF;
				}
			}
	}
	
	.footer {
		border-top: 1px solid #E5E5E5;
    align-items: center;
    display: flex;
    font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 23px;
		
		color: #8D8D8D;
    
    img {
    	padding-left: 18px;
    }
    
    .startingAt {
    	padding-right: 12px;
    }
    
    .perMonth, .startPrice {
    	color: #8D8D8D;
    	font-weight: bold;
    }
    
    .startPrice {
    	padding-right: 10px;
    }
	}
	
	
`;
