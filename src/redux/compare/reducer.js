import Immutable from 'seamless-immutable';

import actions from './actions';

const initState = Immutable.from({
	data: [],
});

export default function compare(state = initState, { type, payload }) {
	switch (type) {
		case actions.SET_ITEM_TO_COMPARE: {
			return Immutable.set(state, 'data', [...state.data, payload.item]);
		}
		case actions.REMOVE_ITEM_FROM_COMPARE: {
			return Immutable.set(state, 'data', payload.item);
		}
		case actions.EMPTY_COMPARE: {
			return Immutable.set(state, 'data', []);
		}
		default: {
			return state;
		}
	}
}
