import {all, takeLatest, call, put} from '@redux-saga/core/effects';

import actions from './actions';
import DetailService from '../../services/DetailService';

function* loadDetailData({ payload }) {
    try {
        const { id } = payload;
        const detailData = yield call(DetailService.loadDetailData, id);
        const { images } = detailData;

        yield put(actions.loadDetailSuccess(detailData));
        yield put(actions.selectImage(images[0]));
    } catch (e) {
        console.error(e);
        return null;
    }
}

export default function* detailSaga() {
    yield all([
        takeLatest(actions.LOAD_DETAIL, loadDetailData),
    ]);
}
