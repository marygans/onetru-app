import {ReduxUtils} from '../../utils/ReduxUtils';

const {makeActionCreator} = ReduxUtils;

const prefix = '[Filter]';

const TYPES = {
	SELECT_FILTER: `${prefix} add filter`,
};

const actions = {
	...TYPES,
	selectFilter: makeActionCreator(TYPES.SELECT_FILTER, 'filter'),
};

export default actions;
export {actions as filterActions};
