import styled from 'styled-components';

import {OVERLAY_STYLE_CLASSES} from '../../constants/overlay';
import {device} from '../../constants/devise';

export const OverlayWrapper = styled.div`
		position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
    
    &.${OVERLAY_STYLE_CLASSES.COMPARE} {
    	background-color: rgba(0,0,0,0.5);
    }
    
    &.${OVERLAY_STYLE_CLASSES.AUTH} {
    	background-color: #0D5C00;
    	
    	@media ${device.tabletM} {
        background-color: white;
    	}
    }
`;
