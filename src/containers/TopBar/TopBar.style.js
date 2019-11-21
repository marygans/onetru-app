import styled from 'styled-components';

import { THEME } from '../../constants/theme';

const { text } = THEME;

export const WrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  box-sizing: border-box;
  
  .left {
    display: flex;
  	justify-content: flex-start;
  	align-items: center;
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
  
`;
