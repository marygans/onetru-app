import {createSelector} from 'reselect';

const loggedIn = ({login}) => login.loggedIn;
const user = ({login}) => login.user;

export const isLoggedInSelector = createSelector(
	[loggedIn],
	(loggedIn) => ({loggedIn})
);

export const userSelector = createSelector(
	[user],
	(user) => ({user})
);
