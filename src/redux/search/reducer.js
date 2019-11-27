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
		case actions.UPDATE_RESULT_ITEM: {
			return Immutable.set(
				state,
				'result',
				[
					...state.result.map(resultItem => resultItem.name === payload.item.name ?
						{...resultItem, isCompare: payload.item.isCompare } : resultItem
					)
				]
			);
		}
		case actions.UPDATE_RESULT_ITEMS: {
			return Immutable.set(
				state,
				'result',
				[
					...state.result.map(resultItem => {
						const newItem = payload.data.find(newItem => newItem.name === resultItem.name);

						return newItem ? {...resultItem, isCompare: !newItem.isCompare } : resultItem;
					})
				]
			);
		}
		default: {
			return state;
		}
	}
}
