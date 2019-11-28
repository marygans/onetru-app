import styled from 'styled-components';
import {THEME} from '../../../constants/theme';

const { text, bg, colors } = THEME;

export const FirstBlockContentStyle = styled.div`
  background: url("${bg.result}") no-repeat center;
  background-size: cover;
  
  .wrapper {
  	padding: 174px 0 109px 93px;
  	background: ${colors.resultPageRectangle};
  }
  
  .info-wrapper {
    
    .big-describe {
        font-weight: bold;
				font-size: 64px;
				line-height: 75px;
				
				.counter-of-result, .counter-all-managers {
					text-decoration-line: underline;
				}
				
				.counter-of-result {
				 	margin-right: 20px;
				}
				
				.counter-all-managers {
					margin-left: 20px;
				}
				   
    }
    
    .small-describe {
        font-style: normal;
				font-weight: normal;
				font-size: 36px;
				line-height: 42px;
				padding-top: 19px;
    }
    
    .big-describe, .small-describe {
      color: ${text.invert}
    }
  }
  
  
`;
