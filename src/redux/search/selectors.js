import { createSelector } from 'reselect';

import {selectActiveFilters} from '../filter/selectors';

const result = ({ Search }) => Search.result;
const hasMore = ({ Search }) => Search.hasMore;
const request = ({ Search }) => Search.request;

export const searchRequestSelector = createSelector(
	[request],
	(request) => ({...request})
);

export const itemsSelector = createSelector(
	[result],
	(result) => ({result})
);

export const selectItem = createSelector(
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

export const isSelectResult = createSelector(
	[selectItem],
	({result}) => Boolean(result && result.length),
);

export const selectHasMoreItems = createSelector(
	[hasMore],
	(hasMore) => ({hasMore})
);
