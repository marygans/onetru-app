import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[Notification]';

const TYPES = {
  SHOW: `${prefix} show notification`,
  HIDE: `${prefix} close`,
};

const actions = {
    ...TYPES,
    show: makeActionCreator(TYPES.SHOW, 'data'),
    hide: makeActionCreator(TYPES.HIDE),
};

export default actions;
export { actions as notificationActions };
