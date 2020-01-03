import React from 'react';
import {useSelector} from 'react-redux';

import {Footer, Header, MainContent} from '../../components/layouts';
import {RestrictedRoutes} from '../../routes';
import {TopBar} from '../TopBar';
import FooterContent from './FooterContent/FooterContent';
import Overlay from '../../components/Overlay/Overlay';
import Notification from '../../components/Notification/Notification';
import {selectNotificationData} from '../../redux/notification/selectors';
import {selectClass} from '../../redux/overlay/selectors';
import {loadingStatusSelector} from '../../redux/search/selectors';
import Spinner from '../../components/Spinner/Spinner';

const Root = () => {
	const {data} = useSelector(selectNotificationData);
	const { styleClass } = useSelector(selectClass);
	const { isLoading } = useSelector(loadingStatusSelector);

	return (
		<>
			{
				isLoading ? <Spinner /> : null
			}
			{
				data ? <Notification data={data}/> : null
			}
			<Overlay styleClass={styleClass} />

			<Header className={styleClass}>
				<TopBar styleClass={styleClass} />
			</Header>

			<MainContent>
				<RestrictedRoutes/>
			</MainContent>

			<Footer>
				<FooterContent/>
			</Footer>
		</>
	)
};

export default Root;
export {Root};
