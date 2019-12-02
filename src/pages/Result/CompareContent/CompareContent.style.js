import styled from 'styled-components';

import {THEME} from '../../../constants/theme';

const { colors } = THEME;

export const CompareContentWrapper = styled.div`
		position: fixed;
    bottom: 0;
    width: 100%;
    background: ${colors.white};
    border-top: 1px solid ${colors.whiteWithEasilyGray};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 48px 30px 19px;
    display: grid;
    grid-gap: 0rem;
    grid-template-columns: 1fr 2fr;
    
    .item-wrapper {
      display: grid;
	    grid-template-columns: repeat(3, 172px);
	    grid-gap: 2rem;
    	text-align: center;
    	
    	img {
    		width: 100%;
    		height: 110px;
    	}
    	
    	span {
    		font-style: normal;
				font-weight: bold;
				font-size: 18px;
				line-height: 21px;
				text-align: center;
				color: ${colors.ghostWithDark};
    	}
    }
    
    .control-wrapper {
      display: grid;
	    grid-template-columns: 1fr 2fr;
	    align-items: center;
    }
    
    .btn {
    	display: flex;
			align-items: center;
	    font-style: normal;
			font-weight: 500;
			font-size: 18px;
			line-height: 21px;
    	background: ${colors.success};
			border-radius: 8px;
			color: ${colors.white};
			padding: 21px 26px 21px 24px;
			width: 340.93px;
			
			.icon-boll {
				display: flex;
		    align-items: center;
		    justify-content: center;
				background: ${colors.white};
				width: 26.57px;
				height: 26.67px;
				border-radius: 50%;
				font-weight: 500;
				font-size: 18px;
				line-height: 21px;
				color: ${colors.success};
				margin-left: 19px;
			}
    }
    
    .reset {
    	font-weight: 300;
			font-size: 36px;
			line-height: 42px;
			text-decoration-line: underline;
			color: ${colors.success};
			padding-left: 47px;
			cursor: pointer;
    }
`;
