import { all, takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import actions from './actions';
import {mockResult} from '../../utils/moks/result';
import { UI_ROUTES } from '../../constants/routes';
import {SearchService} from '../../services/SearchService';


function* search({ payload }) {
	const { search } = payload;

	let result = yield call(SearchService.search, search);

	if (!result.length) { result = mockResult; }

	yield put(actions.result(result));
	yield put(push(UI_ROUTES.search_results))
}

export default function* searchSaga() {
	yield all([
		takeLatest(actions.SEARCH, search),
	]);
}
