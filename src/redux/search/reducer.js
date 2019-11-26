import Immutable from 'seamless-immutable';
import actions from './actions';
import {mockResult} from '../../utils/moks/result';

const initState = Immutable.from({
	result: [...mockResult],
});

export default function search(state = initState, { type, payload }) {
	switch (type) {
		case actions.SEARCH_RESULT: {
			return Immutable.set(state, 'result', payload.result);
		}
		default: {
			return state;
		}
	}
}
