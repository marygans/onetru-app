import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[SEARCH]';

const TYPES = {
	SEARCH: `${prefix} search`,
	SET_SEARCH_REQUEST: `${prefix} set search request`,

	SET_RESULT: `${prefix} set result`,

	UPDATE_RESULT_ITEM: `${prefix} update result item`,
	UPDATE_RESULT_ITEMS: `${prefix} update result items`,

	FETCH_MORE_DATA: `${prefix} fetch more data`,
	ADD_MORE_DATA: `${prefix} add more data`,

	UPDATE_HAS_MORE: `${prefix} update has more`,

	UPDATE_LOADING_STATUS: `${prefix} Set loading status`,
};

const actions = {
	...TYPES,
	search: makeActionCreator(TYPES.SEARCH, 'search'),
	setSearchRequest: makeActionCreator(TYPES.SET_SEARCH_REQUEST, 'request'),
	setResult: makeActionCreator(TYPES.SET_RESULT, 'result'),
	updateItem: makeActionCreator(TYPES.UPDATE_RESULT_ITEM, 'item'),
	updateItems: makeActionCreator(TYPES.UPDATE_RESULT_ITEMS, 'data'),
	fetchMoreData: makeActionCreator(TYPES.FETCH_MORE_DATA),
	addMoreData: makeActionCreator(TYPES.ADD_MORE_DATA, 'result'),
	updateHasMore: makeActionCreator(TYPES.UPDATE_HAS_MORE, 'hasMore'),
	updateLoadingStatus: makeActionCreator(TYPES.UPDATE_LOADING_STATUS, 'isLoading'),
};

export default actions;
export { actions as searchActions };
