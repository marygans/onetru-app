import { all, takeLatest, put } from 'redux-saga/effects';
import {select} from '@redux-saga/core/effects';

import {compareActions} from './actions';
import {searchActions} from '../search/actions';
import {selectCompareData} from './selector';

function* addItemToCompare({ payload }) {
	const { item } = payload;

	const newItem = {
		...item,
		isCompare: true,
	};

	yield put(compareActions.setItemToCompare(newItem));
	yield put(searchActions.updateItem(newItem));
}

function* resetCompare({ payload }) {
	const { data } = yield select(selectCompareData);

	yield put(searchActions.updateItems(data));
	yield put(compareActions.empty());
}

export default function* compareSaga() {
	yield all([
		takeLatest(compareActions.ADD_ITEM_TO_COMPARE, addItemToCompare),
		takeLatest(compareActions.RESET_COMPARE, resetCompare),
	]);
}
