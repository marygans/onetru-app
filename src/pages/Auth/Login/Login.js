import React, { useEffect } from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import {useDispatch} from 'react-redux';

import authActions from '../../../redux/auth/actions';
import AuthForm from '../Form/Form';
import {CONTEXT} from '../../../constants/context';
import {overlayActions} from '../../../redux/overlay/actions';
import {OVERLAY_STYLE_CLASSES} from '../../../constants/overlay';
import {auth, uiConfig} from '../../../firebase';
import {AuthWrapper} from '../AuthWrapper.style';
import AuthNavigation from '../Navigation/AuthNavigation';
import Button from '../../../lib/Button/Button';
import {UI_ROUTES} from '../../../constants/routes';
import Link from '../../../lib/Link';

const Login = () => {
	const dispatch = useDispatch();
	const handleSignIn = (values, actions) => {
		const credentials = {
			...values
		};

		dispatch(authActions.login(credentials));
	};

	useEffect(() => {
		dispatch(overlayActions.show(OVERLAY_STYLE_CLASSES.AUTH));

		return () => {
			dispatch(overlayActions.hide());
		}
	}, [dispatch]);

	return (
		<AuthNavigation>
			<div className="tabs">
				<span className="tab active">
					Landlord
				</span>

				<span className="tab">
					Property Manager
				</span>
			</div>

			<AuthWrapper>

				<div className="link-mobile-wrapper">
					<Link to={UI_ROUTES.signUp} className="link sign-up">No Account? Sign up today!</Link>
				</div>

				<Button className="btn browse-as-guest">
					<span>Browse as Guest</span>
				</Button>

				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
				<div className="circleWrapper">
					<div className="circle">
						<div>OR</div>
					</div>
				</div>
				<AuthForm
					onSubmit={handleSignIn}
					context={CONTEXT.SIGN_IN}
				/>
			</AuthWrapper>
		</AuthNavigation>

	)
};

export default Login;
export { Login };
