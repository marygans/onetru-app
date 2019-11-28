import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[SEARCH]';

const TYPES = {
	SEARCH: `${prefix} search`,

	SEARCH_RESULT: `${prefix} search-result`,
	UPDATE_RESULT_ITEM: `${prefix} update result item`,
	UPDATE_RESULT_ITEMS: `${prefix} update result items`,
};

const actions = {
	...TYPES,
	search: makeActionCreator(TYPES.SEARCH, 'search'),
	result: makeActionCreator(TYPES.SEARCH_RESULT, 'result'),
	updateItem: makeActionCreator(TYPES.UPDATE_RESULT_ITEM, 'item'),
	updateItems: makeActionCreator(TYPES.UPDATE_RESULT_ITEMS, 'data'),
};

export default actions;
export { actions as searchActions };
