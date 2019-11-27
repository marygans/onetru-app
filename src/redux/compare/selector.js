import {createSelector} from 'reselect';

const data = ({ Compare }) => Compare.data;

export const selectCompareData = createSelector(
		[data],
	(data) => ({ data })
);

export const selectorIsMaximumItemsAreCompare = createSelector(
	[data],
	(data) => Boolean(data.length > 2)
);
