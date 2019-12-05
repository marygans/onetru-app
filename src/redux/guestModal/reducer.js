import Immutable from 'seamless-immutable';

import guestModalActions from './actions';

const initState = Immutable.from({
	isOpen: false
});

export default function guestModal(state = initState, { type, payload }) {
	switch(type) {
		case guestModalActions.SHOW: {
			return Immutable.set(state, 'isOpen', true);
		}
		case guestModalActions.HIDE: {
			return Immutable.set(state, 'isOpen', false);
		}
		default: {
			return state;
		}
	}

}
