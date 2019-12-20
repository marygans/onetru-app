export const types = {
	LOGIN: {
		REQUEST: 'LOGIN.REQUEST',
		SUCCESS: 'LOGIN.SUCCESS',
		FAILURE: 'LOGIN.FAILURE',
	},
	LOGOUT: {
		REQUEST: 'LOGOUT.REQUEST',
		SUCCESS: 'LOGOUT.SUCCESS',
		FAILURE: 'LOGOUT.FAILURE',
	},
	REGISTRATION: {
		REQUEST: 'REGISTRATION.REQUEST',
		SUCCESS: 'REGISTRATION.SUCCESS',
		FAILURE: 'REGISTRATION.FAILURE',
	},
};

export const loginAction = credentials => ({
	type: types.LOGIN.REQUEST,
	credentials,
});

export const loginSuccess = user => ({
	type: types.LOGIN.SUCCESS,
	user,
});

export const loginFailure = error => ({
	type: types.LOGIN.FAILURE,
	error,
});

export const logout = () => ({
	type: types.LOGOUT.REQUEST,
});

export const logoutSuccess = () => ({
	type: types.LOGOUT.SUCCESS,
});

export const logoutFailure = error => ({
	type: types.LOGOUT.FAILURE,
	error,
});

export const signUpWithEmailAndPassword = credentials => ({
	type: types.REGISTRATION.REQUEST,
	credentials,
});

export const signUpWithEmailAndPasswordSuccess = credentials => ({
	type: types.REGISTRATION.SUCCESS,
	credentials,
});

export const signUpWithEmailAndPasswordFailure = error => ({
	type: types.REGISTRATION.FAILURE,
	error,
});
