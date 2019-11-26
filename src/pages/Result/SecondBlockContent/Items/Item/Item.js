import React from 'react';

import {ItemWrapper} from './Item.style';
import * as PropTypes from 'prop-types';
import Button from '../../../../../lib/Button/Button';
import {ICONS} from '../../../../../constants/resources';

const Item = ({ item }) => {
	
	return (
		<ItemWrapper>
			<img src={item.img} alt="img" />
			<div className="detail-wrapper">
				<div className="name">{item.name}</div>
				<div>
					<span className="serviceType">{item.serviceType}</span>
					<span className="managementType">{item.managementType}</span>
				</div>
				<div className="button-wrapper">
					<span><Button className="btn compare">Add to Compare</Button></span>
					<span><Button className="btn send-a-message">Send a message</Button></span>
				</div>
				<img src={ICONS.RESULT_PAGE.STAR} alt="rating"/>
			</div>
			<div className="footer">
				<img src={ICONS.RESULT_PAGE.HEART} alt="heart" />
				<span className="startingAt">STARTING AT</span>
				<span className="startPrice">{item.startingPrice}%</span>
				<span className="perMonth">PER MONTH</span>
			</div>
		</ItemWrapper>
	);
	
};

export default Item;
export  { Item };

Item.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	serviceType: PropTypes.string,
	managementType: PropTypes.string,
	rating: PropTypes.number,
	startingPrice: PropTypes.number,
};
