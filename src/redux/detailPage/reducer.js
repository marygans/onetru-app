import Immutable from 'seamless-immutable';

import actions from './actions';

const initState = Immutable.from({
	details: null,
	activeImage: null,
});

export default function detail(state = initState, { type, payload }) {
	switch (type) {
		case actions.LOAD_DETAIL_SUCCESS: {
			return Immutable.set(state, 'details', {...payload.detailData});
		}
		case actions.SELECT_IMAGE: {
			return Immutable.set(state, 'activeImage', payload.activeImage);
		}
		default: {
			return state;
		}
	}
}
