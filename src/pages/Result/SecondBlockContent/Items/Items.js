import React from 'react';
import {useSelector} from 'react-redux';

import {selectResult} from '../../../../redux/search/selectors';

import Item from './Item/Item';
import {ItemsWrapper} from './Items.style';

const Items = () => {

	const {result} = useSelector(selectResult);

	return (
		<ItemsWrapper>
			{result && result.map((item, i) => (
				<Item
					key={i + 'item'}
					className="item"
					item={item}
				/>
			))
			}
		</ItemsWrapper>
	);

};

export default Items;
export {Items};
