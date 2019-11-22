import styled from 'styled-components';

import {THEME} from '../../../../constants/theme';
import {ICONS} from '../../../../constants/resources';

const { colors } = THEME;

export const InfoWrapper = styled.div`
  color: ${colors.black};
  font-size: 32px;
  line-height: 37px;
  width: 450px;
  text-align: center;
    
  .icon-wrapper {
    background: url("${props => ICONS[props.typeIcons]["ELLIPSE"]}") no-repeat center;
    height: 277px;
    display: flex;
    width: 277px;
    align-items: center;
    margin: 0 auto;
    
    .icon {
      background: url("${props => ICONS[props.typeIcons][props.type]}") no-repeat center;
      height: 133px;
      width: 133px;
      margin: 0 auto;
      
      &.SEARCH {
        margin-right: 85px;
      }
    }  
  }
  
  .short-title {
    font-weight: bold;
    padding: 32px 0 20px 0;
  }

`;
