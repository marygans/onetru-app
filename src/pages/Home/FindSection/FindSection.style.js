import styled from 'styled-components';
import {THEME} from '../../../constants/theme';

const { colors } = THEME;

export const FindSectionStyle = styled.div`
  text-align: center;
  padding: 0 113px;
  
  .find-wrapper {
	    display: flex;
	    width: 100%;
      justify-content: center;
	    
	    .find-input {
        margin-right: 38px;
		  }
		  
		  .btn {
	      font-weight: 500;
		    font-size: 36px;
		    padding: 20px 49px;
		    width: 277px;
		    height: 83px;
				color: ${colors.white};
	    }
	}
  
  &.FIND_MANAGER_TODAY {
  	padding-top: 48px;
  	padding-bottom: 156px;
	  color: ${colors.white};
 	  background: ${colors.success};
 	  
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
 	  
 	  .btn {
 	  	background: ${colors.grayLight};
 	  	font-weight: 500;
			color: ${colors.success};
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
  
`;
