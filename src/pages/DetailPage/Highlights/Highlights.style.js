import styled from 'styled-components';

export const HighlightsStyle = styled.div`
	border-bottom: 0.8px solid #E6E5E5;
  padding: 30px 0;
    
	.title {
		font-weight: bold;
		font-size: 24px;
		line-height: 28px;
		color: #484848;
	}
	
	.icons {
		display: grid;
    grid-template-columns: repeat(auto-fill,minmax(336px,1fr));
    grid-gap: 1.5rem 2rem;
    padding-top: 1.75rem;
	
		.icon-wrapper {
			border: 3px solid #0D5701;
			box-sizing: border-box;
			border-radius: 10px;
	    display: flex;
	    align-items: center;
	    padding: 5px 12px;
	    max-width: 336px;
			
			.name {
				font-weight: 300;
				font-size: 24px;
				line-height: 28px;
				color: #0D5701;
			}
		}
	}
	

`;

export const IconStyle = styled.div`
	width: 77px;
	height: 77px;
	background: url("${props => props.iconPath}") no-repeat center center;
`;
