import {createSelector} from 'reselect';

const data = ({ Profile }) => Profile.data;

export const selectIsAuth = createSelector(
	[data],
	(data) => {
		const isAuth = !!data;

		return {isAuth};
	}
);
