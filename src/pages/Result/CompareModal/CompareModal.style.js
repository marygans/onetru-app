import styled from 'styled-components';
import {RESULT_PAGE} from '../../../constants/resources';

export const CompareModalWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	
	background: rgba(0, 0, 0, 0.8);
	
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
	    width: 258px;
	    
	    &.send-a-message {
	    	background: #117700;
	    	color: #FFFFFF;
	    }
  }
  
  table {
  	margin: 0;
    width: 100%;
    padding: 29px 20px;
    
    tr:nth-of-type(odd) {
    	background: #F1F1F1;
    }
  
  	tr.item-wrapper {
  			display: grid;
		    grid-template-columns: repeat(4, 258px);
		    grid-gap: 2rem;
		    text-align: center;
		    background: none;
        padding-bottom: 26px;
		    
		    th {
  		
		      .item {
		        img {
		          width: 100%;
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
	    grid-template-columns: repeat(4,260px);
	    grid-gap: 2rem;
	    text-align: center;

    	td {

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
