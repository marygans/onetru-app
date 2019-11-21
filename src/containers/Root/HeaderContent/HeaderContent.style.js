import styled from 'styled-components';
import {THEME} from '../../../constants/theme';

const { text } = THEME;

export const HeaderContentStyle = styled.div`
  margin-top: 128px;
  padding: 0px 140px 0 42px;
  
  .info-wrapper {
    padding-bottom: 40px;
    
    .big-describe {
        font-size: 96px;
        line-height: 112px;
    }
    
    .small-describe {
        font-size: 38px;
        line-height: 45px;
    }
    
    .big-describe, .small-describe {
      color: ${text.invert}
    }
  }
  
  
`;
