import styled from 'styled-components';
import {device} from '../../../constants/devise';

export const TabsWrapper = styled.div`
	.tab-list {
		display: none;
	
		@media ${device.tabletM} {
			color: #0E6000;
			display: grid;
			grid-template-columns: 1fr 1fr;
	
		.tab-list-item {
				padding: 15px 5px 7px;
				border-bottom: 1px solid #DBDBDB;
	
			&.tab-list-active {
					border-bottom: 4px solid #0E6000;
				}
			}
		}
	}
`;
