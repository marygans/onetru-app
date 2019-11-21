import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[Auth]';

const TYPES = {
  LOGIN: `${prefix} login`,
  LOGOUT: `${prefix} logout`,
};

const actions = {
    ...TYPES,
    login: makeActionCreator(TYPES.LOGIN, 'credentials'),
    logout: makeActionCreator(TYPES.LOGOUT),
};

export default actions;
export { actions as authActions };
