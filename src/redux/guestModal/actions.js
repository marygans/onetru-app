import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[GuestModal]';

const TYPES = {
	SHOW: `${prefix} show`,
	HIDE:`${prefix} hide`,
};

const actions = {
	...TYPES,
	show: makeActionCreator(TYPES.SHOW),
	hide: makeActionCreator(TYPES.HIDE),
};

export default actions;
export { actions as guestModalActions };
