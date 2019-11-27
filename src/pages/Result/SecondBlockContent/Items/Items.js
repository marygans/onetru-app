import React from 'react';

import Item from './Item/Item';
import {ItemsWrapper} from './Items.style';

const Items = ({ isMaximumItemsAreCompare, result, addItemToCompare }) => {

	return (
		<ItemsWrapper>
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
		</ItemsWrapper>
	);

};

export default Items;
export {Items};
