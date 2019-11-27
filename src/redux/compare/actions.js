import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[COMPARE]';

const TYPES = {
	ADD_ITEM_TO_COMPARE: `${prefix} add item to compare`,
	SET_ITEM_TO_COMPARE: `${prefix} set item to compare`,
	RESET_COMPARE: `${prefix} reset compare`,
	EMPTY_COMPARE: `${prefix} empty compare`,

	REMOVE_ITEM_FROM_COMPARE: `${prefix} remove item from compare`,
};

const actions = {
	...TYPES,
	addItemToCompare: makeActionCreator(TYPES.ADD_ITEM_TO_COMPARE, 'item'),
	setItemToCompare: makeActionCreator(TYPES.SET_ITEM_TO_COMPARE, 'item'),
	removeItemFromCompare: makeActionCreator(TYPES.REMOVE_ITEM_FROM_COMPARE, 'item'),
	reset: makeActionCreator(TYPES.RESET_COMPARE),
	empty: makeActionCreator(TYPES.EMPTY_COMPARE),
};

export default actions;
export { actions as compareActions };
