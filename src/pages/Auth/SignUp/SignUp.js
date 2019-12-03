import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import authActions from '../../../redux/auth/actions';
import {overlayActions} from '../../../redux/overlay/actions';
import {OVERLAY_STYLE_CLASSES} from '../../../constants/overlay';
import AuthForm from '../Form/Form';
import {CONTEXT} from '../../../constants/context';
import {AuthWrapper} from '../AuthWrapper.style';
import {auth, uiConfig} from '../../../firebase';
import {StyledFirebaseAuth} from 'react-firebaseui';

const SignUp = () => {
	const dispatch = useDispatch();

	const handleSignIn = (values, actions) => {
		const credentials = {
			...values
		};

		dispatch(authActions.signUp(credentials));
	};

	useEffect(() => {
		dispatch(overlayActions.show(OVERLAY_STYLE_CLASSES.AUTH));

		return () => {
			dispatch(overlayActions.hide());
		}
	}, [dispatch]);

	return (
		<AuthWrapper>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
			<div className="circleWrapper">
				<div className="circle">
					<div>OR</div>
				</div>
			</div>
			<AuthForm
				onSubmit={handleSignIn}
				context={CONTEXT.SIGN_UP}
				isSignUp={true}
			/>
		</AuthWrapper>
	);
};

export default SignUp;
export { SignUp };
