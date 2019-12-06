import React from 'react';

import {SecondBlockContentWrapper} from './SecondBlockContent.style';
import Filter from './Filter/Filter';
import Items from './Items/Items';

const SecondBlockContent = ({
	                            isMaximumItemsAreCompare,
	                            result,
	                            addItemToCompare,
	                            fetchMoreData,
	                            hasMore
                            }) => {

	return (
		<SecondBlockContentWrapper>
			<Filter/>
			<Items
				isMaximumItemsAreCompare={isMaximumItemsAreCompare}
				result={result}
				addItemToCompare={addItemToCompare}
				fetchMoreData={fetchMoreData}
				hasMore={hasMore}
			/>
		</SecondBlockContentWrapper>
	);
};

export default SecondBlockContent;
export {SecondBlockContent};
