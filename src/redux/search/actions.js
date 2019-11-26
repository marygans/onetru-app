import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[SEARCH]';

const TYPES = {
	SEARCH: `${prefix} search`,

	SEARCH_RESULT: `${prefix} search-result`,
};

const actions = {
	...TYPES,
	search: makeActionCreator(TYPES.SEARCH, 'search'),
	result: makeActionCreator(TYPES.SEARCH_RESULT, 'result'),
};

export default actions;
export { actions as searchActions };
