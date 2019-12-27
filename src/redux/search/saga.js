import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import actions from './actions';
import { UI_ROUTES } from '../../constants/routes';
import {SearchService} from '../../services/SearchService';

import {itemsSelector, searchRequestSelector} from './selectors';

function* search({ payload }) {
	try {
		const { search } = payload;
		const {data} = yield call(SearchService.search, search.search);

		yield put(actions.setResult(data));
		yield put(actions.setSearchRequest(search));
		yield put(push(UI_ROUTES.search_results))
	} catch(e) {
		console.error('search', e);
		return null;
	}
}

function* fetchMoreData() {
	try {
		const { result } = yield select(itemsSelector);
		const {search} = yield select(searchRequestSelector);
		const lastItem = result[result.length - 1];
		const lastId = lastItem ? lastItem.id : '';
		const {data} = yield call(SearchService.fetchMoreData, search, lastId);

		if (data.length) {
			yield put(actions.addMoreData(data));
		}

		data.length ? yield put(actions.updateHasMore(true)) : yield put(actions.updateHasMore(false));
	} catch (e) {
		console.error('fetchMoreData', e);
		return null;
	}

}

export default function* searchSaga() {
	yield all([
		takeLatest(actions.SEARCH, search),
		takeLatest(actions.FETCH_MORE_DATA, fetchMoreData),
	]);
}
