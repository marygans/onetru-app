import styled from 'styled-components';

export const Image = styled.div`
	width: 288px;
	height: 140px;
	position: relative;
	background: url("${props => props.imagePath}") no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
  display: inline-block;
  image-rendering: optimizeQuality;
  
	.wrapper {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background: #000000;
		opacity: 0.5;
	}
	
	&.active {
  	border: 8px solid #17A600;
		box-sizing: border-box;
		
		.wrapper {
			opacity: 1;
			background: none;
		}
  }
`;

export const ImageListWrapper = styled.div`
		display: flex;
    align-items: center;
`;
