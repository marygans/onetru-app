import {createSelector} from 'reselect';

const data = ({ Compare }) => Compare.data;
const ui = ({ Compare }) => Compare.ui;

export const selectCompareData = createSelector(
		[data],
	(data) => ({ data })
);

export const selectorIsMaximumItemsAreCompare = createSelector(
	[data],
	(data) => Boolean(data.length > 2)
);

export const selectUiStatus = createSelector(
	[ui],
	(ui) => ui
);
