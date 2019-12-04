import Immutable from 'seamless-immutable';

import overlayActions from './actions';

const initState = Immutable.from({
	styleClass: null
});

export default function overlay(state = initState, { type, payload }) {
	switch(type) {
		case overlayActions.SHOW: {
			return Immutable.set(state, 'styleClass', payload.styleClass);
		}
		case overlayActions.HIDE: {
			return Immutable.set(state, 'styleClass', null);
		}
		default: {
			return state;
		}
	}

}
