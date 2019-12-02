import {all, takeLatest, call} from '@redux-saga/core/effects';
import { push } from 'connected-react-router';
import {put} from 'redux-saga/effects';

import {authActions} from './actions';
import {AuthService} from '../../services/AuthService';
import {UI_ROUTES} from '../../constants/routes';
import profileActions from '../profile/actions';
import {notificationActions} from '../notification/actions';

function* login({ payload }) {
	try {
		const { credentials } = payload;

		const data = yield call(AuthService.login, credentials);

		console.log('login => ', data);
		if (!!data) {
			yield put(profileActions.update_profile(data));
			yield put(push(UI_ROUTES.root));
		}
	} catch (e) {
		console.error(e);
		return null;
	}
}

function* signUp({ payload }) {
	try {
		const { credentials } = payload;

		const data = yield call(AuthService.signUp, credentials);

		console.log('signUp => ', data);
		if (!!data) {
			yield put(profileActions.update_profile(data));
			yield put(push(UI_ROUTES.root));
		}
	} catch (e) {
		console.error(e);
		yield put(notificationActions.show(e));
		return null;
	}

}

function* signOut() {
	try {
		const data = yield call(AuthService.signOut);

		console.log('signUp => ', data);
		yield put(profileActions.remove_profile_data());
		yield put(push(UI_ROUTES.root));
	} catch (e) {
		console.error(e);
		yield put(notificationActions.show(e));
		return null;
	}
}

export default function* authSaga() {
	yield all([
		takeLatest(authActions.LOGIN, login),
		takeLatest(authActions.SIGN_UP, signUp),
		takeLatest(authActions.SIGN_OUT, signOut),
	]);
}
