import styled from 'styled-components';

export const ItemWrapper = styled.div`
	max-width: 393px;
	max-height: 605px;
	border: 1px solid #E5E5E5;
	box-sizing: border-box;
	background: #FFFF;
	
	.detail-wrapper {
	    padding: 19px 10px;
	    
	    .name {
	    	font-weight: bold;
				font-size: 30px;
				line-height: 35px;
				color: #303030;
	    }
	    
	    .serviceType, .managementType {
	    	border: 2px solid #117700;
				box-sizing: border-box;
				border-radius: 11px;
				font-style: normal;
				font-weight: normal;
				font-size: 24px;
				line-height: 28px;
				color: #117700;
	    }
	    
	    .serviceType {
	    	padding-left: 25px;
	    }
	   
	    .managementType {
        padding-left: 28px;
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
						background-color: #E5E5E5;
					}
					
					&.send-a-message {
						color: #FFFFFF;
					}
				}
			}
	}
	
	.footer {
		border: 1px solid #E5E5E5;
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
