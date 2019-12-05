import {createSelector} from 'reselect';

const title = ({ Filter }) => Filter.title;
const filters = ({ Filter }) => Filter.filters;
const activeFilters = ({ Filter }) => Filter.activeFilters;

export const selectFilters = createSelector(
	[filters],
	(filters) => ({ filters })
);

export const selectFiltersTitle = createSelector(
	[title],
	(title) => ({ title })
);

export const selectActiveFilters = createSelector(
	[activeFilters],
	(activeFilters) => ({ activeFilters })
);
