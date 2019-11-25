import styled from 'styled-components';

import {THEME} from '../../../constants/theme';

const { colors } = THEME;

export const SectionContentStyle = styled.div`
  padding: 61px 50px;
  color: ${colors.black};
  text-align: center;
  
  &.LANDLORD {
  	background-color: ${colors.matte};
  }
  
  .title {
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;
    padding-bottom: 65px;
  }
  
  .info-wrapper {
    display: flex;
    justify-content: center;
  }
`;
