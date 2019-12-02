import styled from 'styled-components';

export const SignUpWrapper = styled.div`
	width: 710px;
	margin: 0 auto;
  position: relative;
  z-index: 11;
  background: #FFFFFF;
	border: 1px solid #DCDCDC;
	box-sizing: border-box;
	box-shadow: 0px 2px 4px #DCDCDC;
	border-radius: 8px;
	
	h1 {
		font-style: normal;
		font-weight: 900;
		font-size: 18px;
		line-height: 21px;
		display: flex;
		align-items: flex-end;
		color: #3E6373;
	}
	
	input {
		background: #EEEEEE;
		border-radius: 8px;
		width: 230px;
		padding-left: 21px;
		padding-top: 17px;
		padding-bottom: 17px;
	
		&, &::placeholder {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 16px;
			display: flex;
			align-items: flex-end;
			color: #3E6373;
		}
	}
`;
