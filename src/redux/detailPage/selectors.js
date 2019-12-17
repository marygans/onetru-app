import {createSelector} from 'reselect';

export const details = ({Details}) => Details.details;
export const activeImage = ({Details}) => Details.activeImage;

export const detailsSelector = createSelector(
	[details],
		(details) => ({...details})
);

export const activeImageSelector = createSelector(
	[activeImage],
		(activeImage) => ({activeImage})
);
