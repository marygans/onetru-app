import {all, takeLatest, call, put} from '@redux-saga/core/effects';

import actions from './actions';
import {reduxSagaFirebase} from '../../firebase/fbConfig';

function* loadDetailData({ payload }) {
    try {
        const { id } = payload;
        const snapshot = yield call(reduxSagaFirebase.firestore.getDocument, 'companies/' + id);
        const company = snapshot.data();

        const { images } = company;

        yield put(actions.loadDetailSuccess(company));
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
