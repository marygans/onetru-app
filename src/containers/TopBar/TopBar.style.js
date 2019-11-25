import styled from 'styled-components';

import { THEME } from '../../constants/theme';
import {ICONS} from '../../constants/resources';

const { text } = THEME;
const { HEADER } = ICONS;

export const WrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  padding: 18px 38px;
  
  .left {
    display: flex;
  	justify-content: flex-start;
  	align-items: center;
  	
  	.logos-wrapper {
  		width: 255px;
  		height: 38px;
  		
  		.logo {
		    height: 100%;
		    position: relative;
		    display: block;
        background: url(${HEADER.FULL_LOGO_WHITE}) no-repeat;
        background-size: 52%;
  		}
  	}
  	
  }
  
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    .btn {
      margin-right: 25px;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding: 9px 23px;
    }
    
    .link {
      color: ${text.invert};
      font-size: 18px;
      line-height: 21px;
      cursor: pointer;
    }
  }
  
  .left, .right {
      a {
        color: ${text.invert};
        margin-right: 32px;
        font-size: 18px;
        line-height: 21px;
        text-decoration: none;
        border-left: 1px solid;
        padding-left: 18px;
      }
      
      a:last-child {
        margin-right: 0;
      }
  }
  
  &.changed {
  	background-color: ${text.success};
  	
  	.btn {
  		background-color: ${text.invert};
  		color: ${text.success};
  	}
  }
  
`;
