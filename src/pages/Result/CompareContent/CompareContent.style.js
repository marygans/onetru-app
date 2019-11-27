import styled from 'styled-components';

export const CompareContentWrapper = styled.div`
    border-top: 1px solid #E5E5E5;
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
    	}
    	
    	span {
    		font-style: normal;
				font-weight: bold;
				font-size: 18px;
				line-height: 21px;
				text-align: center;
				color: #6B6B6B;
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
    	background: #117700;
			border-radius: 8px;
			color: #FFFFFF;
			padding: 21px 26px 21px 24px;
			
			.icon-boll {
				display: flex;
		    align-items: center;
		    justify-content: center;
				background: #FFFFFF;
				width: 26.57px;
				height: 26.67px;
				border-radius: 50%;
				font-weight: 500;
				font-size: 18px;
				line-height: 21px;
				color: #117700;
				margin-left: 19px;
			}
    }
    
    .reset {
    	font-weight: 300;
			font-size: 36px;
			line-height: 42px;
			text-decoration-line: underline;
			color: #117700;
			padding-left: 47px;
			cursor: pointer;
    }
`;
