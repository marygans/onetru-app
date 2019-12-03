import {all, takeLatest, call} from '@redux-saga/core/effects';
import {push} from 'connected-react-router';
import {put} from 'redux-saga/effects';

import {authActions} from './actions';
import {AuthService} from '../../services/AuthService';
import {UI_ROUTES} from '../../constants/routes';
import profileActions from '../profile/actions';
import {notificationActions} from '../notification/actions';

function* login({payload}) {
	try {
		const {credentials} = payload;
		const response = yield call(AuthService.login, credentials);
		const {user: {email, photoURL, displayName, emailVerified}} = response;

		const data = {
			email,
			photoURL,
			displayName,
			emailVerified,
		};

		const notification = {
			message: 'Login is successful!',
		};

		yield put(authActions.setCredentials(data));
		yield put(notificationActions.show({...notification, type: 'successful'}));
	} catch (e) {
		console.error(e);
		return null;
	}
}

function* signUp({payload}) {
	try {
		const {credentials} = payload;
		const response = yield call(AuthService.signUp, credentials);
		const {user: {email, photoURL, displayName, emailVerified}} = response;

		const data = {
			email,
			photoURL,
			displayName,
			emailVerified,
		};

		const notification = {
			message: 'Sign up is successful!',
		};

		yield put(authActions.setCredentials(data));
		yield put(notificationActions.show({...notification, type: 'successful'}));
	} catch (e) {
		console.error(e);
		yield put(notificationActions.show({...e, type: 'error'}));
		return null;
	}

}

function* signOut() {
	try {
		yield call(AuthService.signOut);
		yield put(profileActions.remove_profile_data());
		yield put(push(UI_ROUTES.root));
	} catch (e) {
		console.error(e);
		yield put(notificationActions.show({...e, type: 'error'}));
		return null;
	}
}

function* setCredentials({payload}) {
	try {
		const {credentials} = payload;
		const {email, photoURL, displayName, emailVerified} = credentials;

		const data = {
			email,
			photoURL,
			displayName,
			emailVerified,
		};

		yield put(profileActions.update_profile(data));
		yield put(push(UI_ROUTES.root));
	} catch (e) {
		console.error(e);
		return null;
	}


}

export default function* authSaga() {
	yield all([
		takeLatest(authActions.LOGIN, login),
		takeLatest(authActions.SIGN_UP, signUp),
		takeLatest(authActions.SIGN_OUT, signOut),
		takeLatest(authActions.SET_CREDENTIALS, setCredentials),
	]);
}
