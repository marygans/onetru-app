import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import actions from './actions';
import { UI_ROUTES } from '../../constants/routes';
import {SearchService} from '../../services/SearchService';

import {itemsSelector} from './selectors';


function* search({ payload }) {
	const { search } = payload;

	let result = yield call(SearchService.search, search);

	yield put(actions.setResult(result));
	yield put(push(UI_ROUTES.search_results))
}

function* fetchMoreData() {
	const { result } = yield select(itemsSelector);

	const newResult = yield call(SearchService.fetchMoreData, result.length);
	yield put(actions.addMoreData(newResult));

	newResult.length ? yield put(actions.updateHasMore(true)) : yield put(actions.updateHasMore(false));
}

export default function* searchSaga() {
	yield all([
		takeLatest(actions.SEARCH, search),
		takeLatest(actions.FETCH_MORE_DATA, fetchMoreData),
	]);
}
