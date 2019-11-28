import { createSelector } from 'reselect';
import {UI_ROUTES} from '../../constants/routes';

const location = ({ router }) => router.location;

export const selectIsRootPage = createSelector(
	[location],
	(location) => {
		const isRootPage = location.pathname === UI_ROUTES.root;

		return { isRootPage };
	}
);
