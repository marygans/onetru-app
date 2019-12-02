import React, {useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import authActions from '../../redux/auth/actions';
import {SignUpWrapper} from './SignUp.style';
import {overlayActions} from '../../redux/overlay/actions';
import {OVERLAY_STYLE_CLASSES} from '../../constants/overlay';

const SignUp = () => {
	const dispatch = useDispatch();

	const handleSignIn = useCallback(event => {
		event.preventDefault();

		const {email, password} = event.target.elements;
		const credentials = {
			email: email.value,
			password: password.value,
		};

		dispatch(authActions.signUp(credentials));
	});

	useEffect(() => {
		dispatch(overlayActions.show(OVERLAY_STYLE_CLASSES.AUTH));

		return () => {
			dispatch(overlayActions.hide());
		}
	}, []);

	return (
		<SignUpWrapper>
			<h1>Sign up</h1>

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
		</SignUpWrapper>
	);
};

export default SignUp;
export { SignUp };
