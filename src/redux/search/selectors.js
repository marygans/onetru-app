import { createSelector } from 'reselect';

import {selectActiveFilters} from '../filter/selectors';

const result = ({ Search }) => Search.result;

export const selectResult = createSelector(
	[result, selectActiveFilters],
	(result, {activeFilters}) => {

		if (activeFilters.length > 0) {
			const data = {
				result: [],
			};

			activeFilters.forEach(filter => {
				if (data.result.length > 0) {
					data.result = [...data.result.filter(item => item[filter.type] === filter.value)];
				} else {
					data.result = [...result.filter(item => item[filter.type] === filter.value)];
				}
			});

			return { result: data.result };
		}

		return { result };
	}
);

export const selectIsResult = createSelector(
	[selectResult],
	({result}) => Boolean(result && result.length),
);
