import styled from 'styled-components';
import {ICONS, IMAGES} from '../../../constants/resources';

export const InfoTitleStyle = styled.div`
	
	.first-part {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
		.name {
			font-weight: 500;
			font-size: 48px;
			line-height: 56px;
			color: #303030;
		}
		
		.control {
			display: flex;
	    align-items: center;
	    justify-content: space-between;
				
			.icon {
				width: 53px;
				height: 53px;
				cursor: pointer;
				
				&.export {
					background: url(${ICONS.DETAILS.EXPORT}) no-repeat;
					margin-right: 15px;
				}
				
				&.heart {
					background: url(${ICONS.DETAILS.HEART}) no-repeat;
					margin-right: 27px;
				}
				
			}
			
			.btn {
				background: #117700;
				border-radius: 3px;
				font-weight: 500;
				font-size: 18px;
				line-height: 21px;
				color: #FFFFFF;
				width: 204.4px;
				height: 59.67px;
			}
			
		}
		
	}
	
	.second-part {
		
		ul {
			display: flex;
			padding: 0;
			align-items: center;
			
			li {
				font-size: 24px;
				line-height: 28px;
				color: #0D5701;
				display: list-item;
   			margin-right: 37px;
   			
   			&:first-child {
   				list-style-type: none;
   			}
			}
			
		}
	}

`;
