import styled from 'styled-components';
import { Avatar, Rate } from 'antd';

export const ReviewsStyle = styled.div`
	.title {
		font-weight: bold;
		font-size: 24px;
		line-height: 28px;
		color: #484848;
	  padding: 35px 0;
	}
	.review-wrapper {
    border-bottom: 0.8px solid #E6E5E5;
    padding: 30px 0;
    
		.wrapper-title {
		    display: flex;
		    align-items: center;
		    
		    .details {
		      display: flex;
			    flex-direction: column;
			    padding-left: 30px;
		    }
		    
		    ul.name-wrapper {
			    display: flex;
			    align-items: center;
			    padding: 0;
			    margin: 0;
			    
			    li {
			      margin-right: 25px;
			      
			      &:first-child {
			        list-style-type: none;
			      }
			      
			    }
		    }
			}
			
		.body {
      padding-top: 30px;
    }
    
	}
	
`;

export const ReviewerAvatar = styled(Avatar)`
	width: 85px;
	height: 85px;
	z-index: 1;
`;

export const ReviewerRate = styled(Rate)`
    z-index: 1;
    color: #388288;
`;
