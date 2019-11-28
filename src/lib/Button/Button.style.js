import styled from 'styled-components';
import {THEME} from '../../constants/theme';

const { bg, text } = THEME;

export const LibButton = styled.button`
  padding: 20px 80px;
  background-color: ${bg.button};
  color: ${text.invert};
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  border: 1px;
  
  &:disabled {
  	cursor: not-allowed;
  }
`;
