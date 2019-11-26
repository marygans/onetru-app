import React from 'react';

import {SecondBlockContentWrapper} from './SecondBlockContent.style';
import Filter from './Filter/Filter';
import Items from './Items/Items';

const SecondBlockContent = () => {

	return (
		<SecondBlockContentWrapper>
			<Filter />
			<Items />
		</SecondBlockContentWrapper>
	);
};

export default SecondBlockContent;
export { SecondBlockContent };
