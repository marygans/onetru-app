import styled from 'styled-components';
import {THEME} from '../../constants/theme';

const { bg, text, colors } = THEME;

export const LibButton = styled.button`
  background-color: ${bg.button};
  color: ${text.invert};
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  border: 1px;
  width: 276.53px;
  
  &:disabled {
  	cursor: not-allowed;
  }
  
  &.FIND_MANAGER_TODAY {
  	background: ${colors.grayLight};
  	font-weight: 500;
  	color: ${colors.success};
  }
  
  &.header-button {
  	width: 196.03px;
  }

`;
