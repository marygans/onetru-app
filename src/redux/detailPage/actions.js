import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[DetailPage]';

const TYPES = {
	LOAD_DETAIL: `${prefix} load detail data`,
	LOAD_DETAIL_SUCCESS: `${prefix} load detail data success`,
	SELECT_IMAGE: `${prefix} select image`,
};

const actions = {
	...TYPES,
	loadDetail: makeActionCreator(TYPES.LOAD_DETAIL, 'id'),
	loadDetailSuccess: makeActionCreator(TYPES.LOAD_DETAIL_SUCCESS, 'detailData'),
	selectImage: makeActionCreator(TYPES.SELECT_IMAGE, 'activeImage'),
};

export default actions;
export { actions as detailActions };
