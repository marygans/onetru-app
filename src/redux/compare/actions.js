import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[COMPARE]';

const TYPES = {
	ADD_ITEM_TO_COMPARE: `${prefix} add item to compare`,
	SET_ITEM_TO_COMPARE: `${prefix} set item to compare`,
	RESET_COMPARE: `${prefix} reset compare`,
	EMPTY_COMPARE: `${prefix} empty compare`,

	REMOVE_ITEM_FROM_COMPARE: `${prefix} remove item from compare`,

	SHOW_COMPARE_MENU: `${prefix} show compare menu`,
	CLOSE_COMPARE_MENU: `${prefix} close compare menu`,
};

const actions = {
	...TYPES,
	addItemToCompare: makeActionCreator(TYPES.ADD_ITEM_TO_COMPARE, 'item'),
	setItemToCompare: makeActionCreator(TYPES.SET_ITEM_TO_COMPARE, 'item'),
	removeItemFromCompare: makeActionCreator(TYPES.REMOVE_ITEM_FROM_COMPARE, 'item'),
	reset: makeActionCreator(TYPES.RESET_COMPARE),
	empty: makeActionCreator(TYPES.EMPTY_COMPARE),
	showCompareMenu: makeActionCreator(TYPES.SHOW_COMPARE_MENU),
	closeCompareMenu: makeActionCreator(TYPES.CLOSE_COMPARE_MENU),
};

export default actions;
export { actions as compareActions };
