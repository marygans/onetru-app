import { ReduxUtils } from '../../utils/ReduxUtils';

const { makeActionCreator } = ReduxUtils;

const prefix = '[Profile]';

const TYPES = {
	UPDATE_PROFILE: `${prefix} update profile`,
	REMOVE_PROFILE_DATA:`${prefix} remove profile data`,
};

const actions = {
	...TYPES,
	update_profile: makeActionCreator(TYPES.UPDATE_PROFILE, 'data'),
	remove_profile_data: makeActionCreator(TYPES.REMOVE_PROFILE_DATA),
};

export default actions;
export { actions as profileActions };
