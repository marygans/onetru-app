import styled from 'styled-components';
import {device} from '../../../constants/devise';

export const GuestWrapper = styled.div`
	display: none;
	position: fixed;
	
	@media ${device.mobileXL} {
		display: block;
		background: rgba(48, 48, 48, 0.7);
	  z-index: 14;
	  height: 100%;
	  width: 100%;
	  
	  .content {
	    width: 320px;
	    height: 350px;
	    background: #FFFFFF;
	    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    padding-top: 42px;
	    margin: 187px auto 0;
	    
	    .title {
	      font-style: normal;
				font-weight: 500;
				font-size: 24px;
				line-height: 28px;
				color: #000000;
	    }
	    
	    .describe {
	      width: 285.23px;
	      font-weight: 200;
				font-size: 18px;
				line-height: 21px;
				text-align: center;
				color: #000000;
		    padding-bottom: 66px;
	    }
	    
	    .btn {
		    width: 289.53px;
				height: 48.87px;
				left: 40.79px;
				top: 469.64px;
				background: #117700;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-radius: 5px;
				
				&.sing-up {
					span {
						font-weight: 500;
						font-size: 18px;
						line-height: 21px;
						color: #FFFFFF;
					}
				}
				
				&.browse-as-guest {
					margin-top: 14px;
					background: #FFFFFF;
					box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
					border: 2px solid #0E6000;
					box-sizing: border-box;
					border-radius: 5px;
					
					span {
						font-weight: 500;
						font-size: 18px;
						line-height: 21px;
						color: #0D5701;
					}
				}
		  }
		  
	  }
	}
  
`;
