import {all, call, take, takeEvery, fork} from '@redux-saga/core/effects';
import {put} from 'redux-saga/effects';

import {
	types,
	loginSuccess,
	logoutSuccess,
	logoutFailure,
} from './actions';
import {push} from "connected-react-router";
import {UI_ROUTES} from '../../constants/routes';
import {AuthService} from '../../services/AuthService';
import {notificationActions} from '../notification/actions';
import {NotificationTypes} from '../../constants/notification.types';

function* loginSaga({credentials}) {
	try {
		yield call(AuthService.loginWithEmailAndPassword, credentials);
	} catch (error) {
		console.error('loginSaga error', error);

		if (!!error) yield put(notificationActions.show({...error, type: NotificationTypes.error}));
		return null;
	}
}

function* logoutSaga() {
	try {
		yield call(AuthService.signOut)
	} catch (error) {
		console.error('logoutSaga error', error);

		if (!!error) yield put(notificationActions.show({...error, type: NotificationTypes.error}));
		yield put(logoutFailure(error))
	}
}

function* loginStatusWatcher() {
	const channel = yield call(AuthService.authChannel);

	while (true) {
		const { user } = yield take(channel);

		const notification = {
			message: 'Login is successful!',
		};

		if (user) {
			const response = yield call(AuthService.getUser, user.uid);
			if (!response) {
				const newUser = {
					email: user.email,
					typeOfUser: 'owner',
					uid: user.uid,
				};

				yield call(AuthService.setUserToDb, newUser);
			}
			yield put(loginSuccess(user));
			yield put(notificationActions.show({...notification, type: NotificationTypes.successful}));
			yield put(push(UI_ROUTES.root));
		} else {
			yield put(logoutSuccess());
		}

	}
}

function* registrationSaga({credentials}) {
	try {
		const typeOfUser = credentials.isChangeTypeOfUser ? 'manager' : 'owner';

		const response = yield call(AuthService.signUpWithEmailAndPassword, credentials);

		const user = {
			email: credentials.email,
			password: credentials.password,
			typeOfUser,
			uid: response.user.uid,
		};

		yield call(AuthService.setUserToDb, user);
	} catch (error) {
		console.error('registrationSaga error', error);

		if (!!error) yield put(notificationActions.show({...error, type: NotificationTypes.error}));
		return null;
	}
}


export default function* authRootSaga() {
	yield fork(loginStatusWatcher)
	yield all([
		takeEvery(types.LOGIN.REQUEST, loginSaga),
		takeEvery(types.REGISTRATION.REQUEST, registrationSaga),
		takeEvery(types.LOGOUT.REQUEST, logoutSaga),
	])
}
