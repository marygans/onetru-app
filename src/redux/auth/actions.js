import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[Auth]';

const TYPES = {
  LOGIN: `${prefix} login`,
  SIGN_UP: `${prefix} sign up`,
  SIGN_OUT: `${prefix} signOut`,
};

const actions = {
    ...TYPES,
    login: makeActionCreator(TYPES.LOGIN, 'credentials'),
    signUp: makeActionCreator(TYPES.SIGN_UP, 'credentials'),
    signOut: makeActionCreator(TYPES.SIGN_OUT),
};

export default actions;
export { actions as authActions };
