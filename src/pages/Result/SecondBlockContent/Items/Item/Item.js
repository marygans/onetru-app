import React from 'react';
import * as PropTypes from 'prop-types';
import {Field, Formik} from 'formik';

import {ItemWrapper} from './Item.style';
import Button from '../../../../../lib/Button/Button';
import {ICONS} from '../../../../../constants/resources';

const Item = ({ item, isMaximumItemsAreCompare, addItemToCompare }) => {

	return (
		<ItemWrapper>
			<div className="image-wrapper">
				<img src={item.img} alt="img" />
			</div>

			<div className="detail-wrapper">
				<div className="name">{item.name}</div>

				<div className="type-wrapper">
					<span className="serviceType">{item.serviceType}</span>
					<span className="managementType">{item.managementType}</span>
				</div>

				<div className="button-wrapper">
					<span>
						<Button className="btn compare" onClick={() => addItemToCompare(item)} disabled={isMaximumItemsAreCompare}>
							<span>Add to Compare</span>
						</Button>
					</span>

					<span>
						<Button className="btn send-a-message">
							<span>Send a message</span>
						</Button>
					</span>
				</div>

				<div className="compare-wrapper">
					<Formik>
						<Field
							type="checkbox"
							name="manual-only"
							id="manual-only"
							className="compare-input"
							checked={item.isCompare}
							disabled
						/>
					</Formik>
					<span className="compare">Compare</span>
				</div>

			</div>

			<div className="footer">
				<img src={ICONS.RESULT_PAGE.HEART} alt="heart" />
				<span className="startingAt">STARTING AT</span>
				<span className="startPrice">{item.startingPrice}</span>
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
	startingPrice: PropTypes.string,
};
