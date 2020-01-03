import styled from 'styled-components';
import {Avatar, Dropdown, Menu} from 'antd';

export const DropMenuStyle = styled(Dropdown)`
	
`;

export const AvatarStyle = styled(Avatar)`
`;

export const MenuStyle = styled(Menu)`
	& {
    border-radius: 0;
    position: relative;
    top: 18px;
    right: -14px;
	}
	&:before {
    content: '';
    position: absolute;
    right: 22px;
    top: -41px;
    border: 19px solid transparent;
    border-bottom: 22px solid white;
	}

	.item { 
		font-weight: normal;
		font-size: 16px;
		line-height: 19px;
		color: #0D5A00;
		
		&.button {
			font-weight: 500;
			font-size: 18px;
			line-height: 21px;
			color: #FFFFFF;
			padding: 11px 66px;
	    max-width: 204px;
		}
	}
`;
