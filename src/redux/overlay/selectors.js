import { createSelector } from 'reselect';

const styleClass = ({ Overlay }) => Overlay.styleClass;

export const selectClass= createSelector(
	[styleClass],
	(styleClass) => ({ styleClass }),
);

