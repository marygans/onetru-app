import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import actions from './actions';
import { UI_ROUTES } from '../../constants/routes';
import {SearchService} from '../../services/SearchService';

import {itemsSelector, searchRequestSelector} from './selectors';
import {reduxSagaFirebase} from '../../firebase/fbConfig';
import {functions} from 'firebase';
import {SearchDto} from '../../common/dto/search.dto';


function* search({ payload }) {
	try {
		const { search } = payload;
		const {data} = yield call(SearchService.search, search);

		const {companies} = data;

		yield put(actions.setResult(companies));
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
		const search = yield select(searchRequestSelector);
		const lastItem = result[result.length - 1];

		const dataForRequest = {
			...search,
			lastId: lastItem ? lastItem.id : '',
		};

		const {data} = yield call(SearchService.fetchMoreData, dataForRequest);
		const {companies} = data;

		if (companies.length) {
			yield put(actions.addMoreData(companies));

			companies.length ? yield put(actions.updateHasMore(true)) : yield put(actions.updateHasMore(false));
		}
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
