import {ReduxUtils} from '../../utils/ReduxUtils';

const {makeActionCreator} = ReduxUtils;

const prefix = '[Auth]';

const TYPES = {
	LOGIN: `${prefix} login`,
	SIGN_UP: `${prefix} sign up`,
	SIGN_OUT: `${prefix} signOut`,
	SET_CREDENTIALS: `${prefix} set credentials`,
	SELECT_TAB: `${prefix} select tab`,
};

const actions = {
	...TYPES,
	login: makeActionCreator(TYPES.LOGIN, 'credentials'),
	signUp: makeActionCreator(TYPES.SIGN_UP, 'credentials'),
	signOut: makeActionCreator(TYPES.SIGN_OUT),
	setCredentials: makeActionCreator(TYPES.SET_CREDENTIALS, 'credentials'),
	selectTab: makeActionCreator(TYPES.SELECT_TAB, 'tab'),
};

export default actions;
export {actions as authActions};
