import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {StyledFirebaseAuth} from 'react-firebaseui';

import authActions from '../../../redux/auth/actions';
import {overlayActions} from '../../../redux/overlay/actions';
import {OVERLAY_STYLE_CLASSES} from '../../../constants/overlay';
import AuthForm from '../Form/Form';
import {CONTEXT} from '../../../constants/context';
import {AuthWrapper} from '../AuthWrapper.style';
import {auth, uiConfig} from '../../../firebase';
import AuthNavigation from '../Navigation/AuthNavigation';
import Link from '../../../lib/Link';
import {UI_ROUTES} from '../../../constants/routes';
import Button from '../../../lib/Button/Button';
import {history} from '../../../redux/store';
import Tabs from '../Tabs/Tabs';

const SignUp = () => {
	const dispatch = useDispatch();
	const { SIGN_UP } = CONTEXT;

	const handleSignUp = (values, actions) => {
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

	const onGoToRoot = () => {
		history.push(UI_ROUTES.root);
	};

	return (
		<AuthNavigation>
			<Tabs />

			<AuthWrapper>
				<div className="link-mobile-wrapper">
					<Link to={UI_ROUTES.login} className="link sign-up">{SIGN_UP.footer.link}</Link>
				</div>

				<Button className="btn browse-as-guest" onClick={onGoToRoot}>
					<span>Browse as Guest</span>
				</Button>

				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />

				<div className="circleWrapper">
					<div className="circle">
						<div>OR</div>
					</div>
				</div>

				<AuthForm
					onSubmit={handleSignUp}
					context={SIGN_UP}
					isSignUp={true}
				/>
			</AuthWrapper>

		</AuthNavigation>
	);
};

export default SignUp;
export { SignUp };
