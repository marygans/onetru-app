import React from 'react';
import {FilterWrapper} from './Filter.style';
import {CONTEXT} from '../../../../constants/context';

const Filter = () => {
	const { title, ratings, managementTypes, serviceTypes } = CONTEXT["FILTER"];

	const isNumber = (value) => !!+value;

	const handleChangeRating = (event) => {
		const selectIsNumber = isNumber(event.target.value);

		console.log('handleChangeRating', selectIsNumber);
	};

	const handleChangeManagementType = (event) => {
		console.log('handleChangeManagementType', event.target.value);
	};

	const handleChangeServiceType = (event) => {
		console.log('handleChangeServiceType', event.target.value);
	};

	return (
		<FilterWrapper>
			<span className="title">{title}</span>
			<span>
				<select
					className="ratings"
					name={ratings.placeholder}
					id={ratings.placeholder + ratings.data.length}
					onChange={handleChangeRating}
				>
					{
						ratings.data.map((rating, i) => (
							<option key={i + ratings.placeholder} value={rating.name}>{rating.value}</option>
						))
					}
				</select>

				<select
					className="managementType"
					name={managementTypes.placeholder}
					id={managementTypes.placeholder + managementTypes.data.length}
					onChange={handleChangeManagementType}
				>
					{
						managementTypes.data.map((managementType, i) => (
							<option key={i + managementTypes.placeholder} value={managementType.name}>{managementType.value}</option>
						))
					}
				</select>

				<select
					className="serviceType"
					name={serviceTypes.placeholder}
					id={serviceTypes.placeholder + serviceTypes.data.length}
					onChange={handleChangeServiceType}
				>
					{
						serviceTypes.data.map((serviceType, i) => (
							<option key={i + serviceTypes.placeholder} value={serviceType.name}>{serviceType.value}</option>
						))
					}
				</select>
			</span>
		</FilterWrapper>
	)
};

export default Filter;
export { Filter };
