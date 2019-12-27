import styled from 'styled-components';
import {THEME} from '../../../constants/theme';
import {device} from '../../../constants/devise';

const {colors} = THEME;

export const FindSectionStyle = styled.div`
  text-align: center;
  padding: 0 113px;
  
  &.FIND_MANAGER_TODAY {
  	padding-top: 48px;
  	padding-bottom: 156px;
	  color: ${colors.white};
 	  background: ${colors.success};
 	  
 	  h1 {
	    color: ${colors.white};
 	  }
 	  
 	  .info-wrapper {
 	  	padding-top: 25px;
	  	padding-bottom: 50px;
	  }
	  
 	  .title {
	    font-weight: 500;
			font-size: 48px;
			line-height: 56px;
 	  }
 	  
 	  .description {
 	  	font-weight: 300;
			font-size: 36px;
			line-height: 42px;
 	  }
 
	}
		
	&.QUESTIONS {
    padding-top: 60px;
    padding-bottom: 74px;
		font-weight: 300;
		font-size: 36px;
		line-height: 42px;
	  color: ${colors.success};
	  background: ${colors.matte};
	  
	  .title {
			font-weight: 500;
			font-size: 48px;
			line-height: 56px;
	  }
	  
	  .title, .email {
	  	 color: ${colors.successDark};	
	  }
	  
	  .email {
	  	font-weight: bold;
	  } 
	  
	  .info-wrapper {
	  	padding-bottom: 40px;
	  }
	 
	}
	
	&.QUESTIONS, &.FIND_MANAGER_TODAY {
	
		@media ${device.laptop} {
  		padding: 61px 20px;
      font-size: 24px;
    	line-height: 30px;
  		
  		.title {
  			font-size: 48px;
        line-height: 52px;
        padding-bottom: 30px;
  		}
  	}
  
	  @media ${device.tabletT} {
	    padding: 20px 20px;
	    
    	&, .description {
	      font-size: 24px;
	      line-height: 30px;
    	}
    	
	    .title {
  			font-size: 32px;
        line-height: 52px;
        padding-bottom: 0;
  		}
  		
	  }
	  
	  @media ${device.tablet} {
	  	&, .description {
				font-size: 18px;	  	
	  	}
	  }
	}
	
  
`;
