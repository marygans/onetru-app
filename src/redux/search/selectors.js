import { createSelector } from 'reselect';

const result = ({ Search }) => Search.result;

export const selectResult = createSelector(
	[result],
	(result) => ({ result }),
);

export const selectIsResult = createSelector(
	[selectResult],
	({result}) => Boolean(result && result.length),
);
