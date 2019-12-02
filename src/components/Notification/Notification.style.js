import styled, { keyframes } from 'styled-components';

export const keyFrameExampleOne = keyframes`
`;

export const NotificationWrapper = styled.div`
  z-index: 12;
  position: absolute;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  right: 0rem;
  width: 320px;
  
  &.alert-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    animation: ${keyFrameExampleOne} 2s ease-in-out;
	}
	
	&.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
	}
`;
