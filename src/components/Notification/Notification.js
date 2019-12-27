import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {NotificationWrapper} from './Notification.style';
import {notificationActions} from '../../redux/notification/actions';

const Notification = ({ data }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const timer = setTimeout(() => dispatch(notificationActions.hide()), 4500);

		return () => clearTimeout(timer);
	}, [dispatch]);

	return (
		<NotificationWrapper className={data.type}>
			<span>{data.message}</span>
		</NotificationWrapper>
	)
};

export default Notification;
export { Notification };
