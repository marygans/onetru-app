import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Item from './Item/Item';
import {ItemsWrapper} from './Items.style';

const Items = ({isMaximumItemsAreCompare, result, addItemToCompare, fetchMoreData, hasMore}) => {

	return (
		<ItemsWrapper>

			<InfiniteScroll
				dataLength={result.length}
				hasMore={hasMore}
				next={fetchMoreData}
				loader={<h4 className='info'>Loading...</h4>}
				endMessage={
					<p className='info'>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				{result && result.map((item, i) => (
					<Item
						key={i + 'item'}
						className="item"
						item={item}
						isMaximumItemsAreCompare={isMaximumItemsAreCompare}
						addItemToCompare={addItemToCompare}
					/>
				))
				}
			</InfiniteScroll>

		</ItemsWrapper>
	);

};

export default Items;
export {Items};
