import {all, fork} from '@redux-saga/core/effects';

import searchSaga from './search/saga';

export default function* rootSaga() {
    yield all([
        fork(searchSaga),
    ]);
}
