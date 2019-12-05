import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {FilterWrapper} from './Filter.style';
import {selectFilters, selectFiltersTitle} from '../../../../redux/filter/selectors';
import {filterActions} from '../../../../redux/filter/actions';

const Filter = () => {
	const { title } = useSelector(selectFiltersTitle);
	const { filters } = useSelector(selectFilters);
	const dispatch = useDispatch();

	const onChangeFilter = (event) => {
		const filter = {
			type: event.target.name,
			value: event.target.value,
		};

		dispatch(filterActions.selectFilter(filter));
	};

	return (
		<FilterWrapper>
			<span className="title">{title}</span>
			<span>
				{
					filters.map((filter, i) => (
						<select
							key={i + filter.placeholder}
							className="ratings"
							name={filter.key}
							id={filter.placeholder + filter.data.length}
							onChange={onChangeFilter}
						>
							{
								filter.data.map((data, i) => (
									<option
										key={i + filter.placeholder}
										value={data.value}
									>
										{data.value}
									</option>
								))
							}
						</select>
					))
				}
			</span>
		</FilterWrapper>
	)
};

export default Filter;
export { Filter };
