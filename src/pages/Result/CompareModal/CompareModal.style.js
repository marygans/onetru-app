import styled from 'styled-components';

import {RESULT_PAGE} from '../../../constants/resources';
import {THEME} from '../../../constants/theme';

const { colors } = THEME;

export const CompareModalWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	z-index: 12;
	
	.info {
		width: 1242px;
    background: #FFFFFF;
    position: relative;
    margin: 0 auto;
    top: 418px;
	}
	
	header {
		background: #117700;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 2px;
		font-weight: normal;
		font-size: 48px;
		line-height: 56px;
		color: #FFFFFF;
    padding-top: 35px;
    padding-bottom: 40px;
    padding-left: 62px;
	}
	
	.btn {
			padding: 15px 35px 15px 43px;
			font-weight: 500;
			font-size: 24px;
			line-height: 28px;
			border-radius: 3px;
	    text-align: center;
	    
	    &.send-a-message {
	    	background: #117700;
	    	color: #FFFFFF;
	    }
	    
	    &.done {
	    	width: 257px
	    }
  }
  
  table {
  	margin: 0;
    width: 100%;
    padding: 0 20px 29px 20px;
    
    th {
    	padding: 0;
    }
    
    tr:nth-of-type(odd) {
    	background: #F1F1F1;
    }
    
  	tr.item-wrapper {
  			display: grid;
		    grid-template-columns: repeat(4, 300px);
		    grid-gap: 0rem;
		    text-align: center;
		    background: none;
		    
		    th {
  		
		      .item {
		      	padding-top: 29px;
		      	padding-bottom: 26px;
		      	border-left: 1px solid #D7D7D7;
    				border-right: 1px solid #D7D7D7;
    				
		        img {
              width: 260px;
					    height: 210px;
		        }
		        
		        &.best {
    					background: rgba(184, 255, 187, 0.3);
    					
    					img {
    						opacity: 0.7;
    					}
    				}
		        
		        .bestValue {
		        	font-weight: bold;
							font-size: 36px;
							line-height: 42px;
							text-align: center;
							color: #0E6500;
							height: 42px;
		        }
		        
		        .name {
		          font-weight: bold;
							font-size: 20px;
							line-height: 23px;
							color: #303030;
							padding-bottom: 17px;
		        }
		      }
		    }
    }
    
    tr {
	    display: grid;
	    grid-template-columns: repeat(4,300px);
	    grid-gap: 0rem;
	    text-align: center;

    	td {
    		border-left: 1px solid rgba(241,241,241,0);
    		
    		&.empty {
    			border-left: 1px solid #D7D7D7;
    		}
    		
    		&.typeName, &.typeValue {
			    padding-left: 33px;
    		}

    		&.typeName {
		      font-weight: bold;
					font-size: 24px;
					line-height: 28px;
					color: #0F6900;
					text-align: left;
		    }
		    
		    &.typeValue {
		    	text-align: left;
		    	display: flex;
			    align-items: center;
		    }
		    
    		span {
	        display: inline-block;
          width: 30px;
    			height: 30px;

					&.ok {
						background: url(${RESULT_PAGE.OK}) no-repeat center;
					}

					&.error {
						background: url(${RESULT_PAGE.ERROR}) no-repeat center;
					}
					
					&.price {
			      width: 100%;
				    display: flex;
				    align-items: center;
				    justify-content: center;
				    font-size: 22px;
						line-height: 26px;
						color: ${colors.priceColor};
					}
				}
    	}
    	
    	&:nth-of-type(2n) {
	      td.detail {
	      	border-left: 1px solid #D7D7D7;
	      }
	    }
	    
    }
  	
  	
  }
	
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		
		.btn {
		
			&.back {
				background: #BFBFBF;
				color: #272727;
				margin-right: 15px;
			}
			
			&.done {
				background: #117700;
				color: #FFFFFF;
			}
		}
		
		padding-bottom: 65px;
	}
`;
