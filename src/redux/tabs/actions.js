import {ReduxUtils} from '../../utils/ReduxUtils';

const {makeActionCreator} = ReduxUtils;

const prefix = '[Tabs]';

const TYPES = {
	SELECT_TAB: `${prefix} select tab`,
};

const actions = {
	...TYPES,
	selectTab: makeActionCreator(TYPES.SELECT_TAB, 'activeTab'),
};

export default actions;
export {actions as tabsActions};
