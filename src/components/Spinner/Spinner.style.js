import styled from 'styled-components';

export const SpinnerStyle = styled('div')`
	position: fixed;
	height: 100%;
	opacity: 1;
	background: #0000003b;
	max-width: 100%;
	width: 100%;
	display: block;
	
	.ant-spin-spinning {
		position: fixed;
		left: 50%;
		top: 50%;
	}
`;

