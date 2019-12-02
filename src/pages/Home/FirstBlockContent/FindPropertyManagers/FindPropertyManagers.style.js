import styled from 'styled-components';

import {device} from '../../../../constants/devise';

export const FindPropertyManagersStyled = styled.div`
	&.QUESTIONS, &.FIND_MANAGER_TODAY {
    .form {
	    justify-content: center;
    }
  }
  .form {
  	display: flex;
    width: 100%;
 
    .searchBtn {
	    margin-left: 17px;
	    font-weight: 500;
	    font-size: 36px;
	    line-height: 42px;
	  }
    
    @media ${device.laptopT} {
    	input {
    		height: 60px;
    	}
    	
    	input, input::placeholder {
    		font-size: 24px;
    	}
    	
    	.searchBtn {
    		font-size: 24px;
    		line-height: normal;
    		padding: 10px 40px;
    	}
    }

    @media ${device.tablet} {
    	input {
    		font-size: 18px;
    	}
    	
    	input, input::placeholder {
    		font-size: 18px;
    	}
    	
    	.searchBtn {
    		font-size: 18px;
    	}
    }
    
    @media ${device.mobileT} {
    	flex-direction: column;
    	align-items: center;
    	
    	input {
    		padding: 9px 6px;
    	}
    	
    	.searchBtn {
    		margin: 10px 0;
    		padding: 10px 0;
    		width: 100%;
    	}
    }

  }
`;
