import styled from 'styled-components';
import {THEME} from '../../../constants/theme';

const { text, bg, colors } = THEME;

export const FirstBlockContentStyle = styled.div`
  background: url("${bg.img}") no-repeat center;
  background-size: cover;
  
  .wrapper {
  	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${colors.rootRectangle};
    padding: 128px 140px 0 42px;
  }
  
  .info-wrapper {
    padding-bottom: 40px;
    
    .big-describe {
        font-size: 96px;
        line-height: 112px;
    }
    
    .small-describe {
        font-size: 38px;
        line-height: 45px;
        padding-bottom: 40px;
    }
    
    .big-describe, .small-describe {
      color: ${text.invert}
    }
  }
  
  
`;
