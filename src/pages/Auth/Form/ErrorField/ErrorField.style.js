import styled from 'styled-components';

import {THEME} from '../../../../constants/theme';

const {text} = THEME;

export const ErrorFieldWrapper = styled.div`
  max-width: 230px;
	text-align: left;
	
  &.form-error {
  	position: relative;
    opacity: 1;
    transition: all 0.15s linear;
    font-size: 14px;
    color: ${text.error};
    border-radius: 4px;
    padding: 5px 14px;
  	
  	&.visible {
  		opacity: 1;
  	}
  }
`;
