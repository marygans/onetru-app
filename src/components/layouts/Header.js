import styled from 'styled-components';
import {device} from '../../constants/devise';
import {OVERLAY_STYLE_CLASSES} from '../../constants/overlay';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  
  &.${OVERLAY_STYLE_CLASSES.AUTH} {
	  @media ${device.tabletM} {
	     background: #0D5701;
	     z-index: 13;
	   }
  }
  
`;
