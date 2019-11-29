import styled from 'styled-components';
import {device} from '../../../constants/devise';

export const FooterContentWrapper = styled.div`
	width: 100%;
	text-align: center;

	.link-wrapper {
		padding: 77px 0;
		
		.link {
			color: #ffffff;
	    font-size: 24px;
	    line-height: 28px;
	    text-align: center;
	    cursor: pointer;
	    margin-left: 119px;
	    text-decoration: none;
	    
	    &:first-child {
	    	margin: 0;
	    }
		}
		
		@media ${device.tabletT} {
			padding: 40px 0;
				
			.link {
				margin-left: 50px;
			}
		
		}
		
		@media ${device.mobileXL} {
			.link {
				margin-left: 20px;
				font-size: 18px;
			}
		}
		
		@media ${device.mobileL} {
			.link {
				font-size: 18px;
			}
		}
		
		@media ${device.mobileM} {
			display: flex;
			flex-direction: column;
		
			.link, .link:first-child {
				font-size: 24px;
				margin: 0 0 30px;
				
				&:last-child {
					margin-bottom: 0;
				}
			}
			
		}

	}
	
	.licence-wrapper {
		padding: 19px 0;
	}
`;
