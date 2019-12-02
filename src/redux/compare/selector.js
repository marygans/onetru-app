import {createSelector} from 'reselect';

import { SelectorUtils } from '../../utils/SelectorUtils';

const data = ({ Compare }) => Compare.data;
const ui = ({ Compare }) => Compare.ui;

export const selectCompareData = createSelector(
		[data],
	(data) => {
			if (data.length > 1) {
				return { data: SelectorUtils.getItemsWithBest(data) }
			}

		return { data };
	}
);

export const selectorIsMaximumItemsAreCompare = createSelector(
	[data],
	(data) => Boolean(data.length > 2)
);

export const selectUiStatus = createSelector(
	[ui],
	(ui) => ui
);


