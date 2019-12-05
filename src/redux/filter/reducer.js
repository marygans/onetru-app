import Immutable from 'seamless-immutable';

import {filterActions} from './actions';
import {CONTEXT} from '../../constants/context';

const isFilterDefaultValues = (filterValue) => {
	const defaultValues = CONTEXT.FILTER.filters.map(filter => filter.data[0].value);

	return defaultValues.includes(filterValue);
};

const getActiveFilters = (activeFilters, newFilter) => {
	if (isFilterDefaultValues(newFilter.value)) {
		return [
			...activeFilters.filter(filter => filter.type !== newFilter.type)
		];
	} else {
		return [
			...activeFilters.filter(filter => filter.type !== newFilter.type),
			newFilter,
		]
	}
};

const initState = Immutable.from({
	title: CONTEXT.FILTER.title,
	filters: CONTEXT.FILTER.filters,
	activeFilters: [],
});

export default function filter(state = initState, { type, payload }) {
	switch(type) {
		case filterActions.SELECT_FILTER: {
			return Immutable.set(state, 'activeFilters',  getActiveFilters(state.activeFilters, payload.filter));
		}
		default: {
			return state;
		}
	}

}
