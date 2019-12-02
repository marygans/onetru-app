import React, { useCallback } from 'react';

import {LoginWrapper} from './Login.style';
import {useDispatch} from 'react-redux';
import authActions from '../../redux/auth/actions';

const Login = () => {
	const dispatch = useDispatch();

	const handleSignIn = useCallback(event => {
		event.preventDefault();

		const {email, password} = event.target.elements;
		const credentials = {
			email: email.value,
			password: password.value,
		};

		dispatch(authActions.login(credentials));
	});

	return (
		<LoginWrapper>
			<h1>Sign in</h1>

			<form onSubmit={handleSignIn}>
				<label>
					Email
					<input type="email" name="email" placeholder="Email" />
				</label>
				<label>
					Password
					<input type="password" name="password" placeholder="Password" />
				</label>
				<button type="submit">Sign Up</button>
			</form>

		</LoginWrapper>
	)
};

export default Login;
export { Login };
