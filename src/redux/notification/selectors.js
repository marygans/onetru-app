import {createSelector} from 'reselect';

const data = ({ Notification }) => Notification.data;

export const selectNotificationData = createSelector(
	[data],
	(data) => data,
);
