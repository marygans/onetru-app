import Immutable from 'seamless-immutable';
import actions from './actions';

const initState = Immutable.from({
	result: [],
	hasMore: true,
	request: '',
	isLoading: false,
});

export default function search(state = initState, { type, payload }) {
	switch (type) {
		case actions.SET_RESULT: {
			return Immutable.set(state, 'result', payload.result);
		}
		case actions.SET_SEARCH_REQUEST: {
			return Immutable.set(state, 'request', payload.request);
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
		case actions.ADD_MORE_DATA: {
			return Immutable.set(state, 'result', [...state.result, ...payload.result]);
		}

		case actions.UPDATE_HAS_MORE: {
			return Immutable.set(state, 'hasMore', payload.hasMore);
		}
		case actions.UPDATE_LOADING_STATUS: {
			return Immutable.set(state, 'isLoading', payload.isLoading);
		}
		default: {
			return state;
		}
	}
}
