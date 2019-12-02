import Immutable from 'seamless-immutable';
import {profileActions} from './actions';

const initState = Immutable.from({
	data: null
});

export default function profile(state = initState, { type, payload }) {
	switch(type) {
		case profileActions.UPDATE_PROFILE: {
			return Immutable.set(state, 'data', { ...payload.data });
		}
		case profileActions.REMOVE_PROFILE_DATA: {
			return Immutable.set(state, 'data', null);
		}
		default: {
			return state;
		}
	}

}
