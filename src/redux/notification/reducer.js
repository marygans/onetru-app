import Immutable from 'seamless-immutable';

import {notificationActions} from './actions';

const initState = Immutable.from({
	data: null
});

export default function notification(state = initState, { type, payload }) {
	switch(type) {
		case notificationActions.SHOW: {
			return Immutable.set(state, 'data', payload.data);
		}
		case notificationActions.HIDE: {
			return Immutable.set(state, 'data', null);
		}
		default: {
			return state;
		}
	}

}
