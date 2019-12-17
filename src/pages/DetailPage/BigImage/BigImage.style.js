import styled from 'styled-components';

export const ImageFirst = styled.div`
	height: 550px;
  background: url("${props => props.imagePath}") no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
  image-rendering: optimizeQuality;
`;
