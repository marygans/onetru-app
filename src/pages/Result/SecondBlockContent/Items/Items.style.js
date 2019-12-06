import styled from 'styled-components';

export const ItemsWrapper = styled.div`
	.infinite-scroll-component {
		display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(392px, 1fr));
	  grid-gap: 5rem 2rem;
	  padding-top: 1.75rem;
	}
	
	.info {
	    text-align: center;
	    padding: 60px;
	}
`;
