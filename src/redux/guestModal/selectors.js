import { createSelector } from 'reselect';

const isOpen = ({ GuestModal }) => GuestModal.isOpen;

export const selectIsOpenGuestModal= createSelector(
	[isOpen],
	(isOpen) => ({ isOpen }),
);

