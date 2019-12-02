import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[Overlay]';

const TYPES = {
	SHOW: `${prefix} show`,
	HIDE:`${prefix} hide`,
};

const actions = {
	...TYPES,
	show: makeActionCreator(TYPES.SHOW, 'styleClass'),
	hide: makeActionCreator(TYPES.HIDE),
};

export default actions;
export { actions as overlayActions };
