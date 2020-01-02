import React, {useEffect} from 'react';
import firebase from 'firebase';
import {useDispatch, useSelector} from 'react-redux';
import {StyledFirebaseAuth} from 'react-firebaseui';

import {loginAction} from '../../../redux/auth/actions';
import AuthForm from '../Form/Form';
import {CONTEXT} from '../../../constants/context';
import {overlayActions} from '../../../redux/overlay/actions';
import {OVERLAY_STYLE_CLASSES} from '../../../constants/overlay';
import {AuthWrapper} from '../AuthWrapper.style';
import AuthNavigation from '../Navigation/AuthNavigation';
import Button from '../../../lib/Button/Button';
import {UI_ROUTES} from '../../../constants/routes';
import Link from '../../../lib/Link';
import {selectIsOpenGuestModal} from '../../../redux/guestModal/selectors';
import GuestModal from '../GuestModal/GuestModal';
import {guestModalActions} from '../../../redux/guestModal/actions';
import uiConfig from '../../../firebase/uiFbConfig';

const Login = () => {
	const dispatch = useDispatch();
	const { SIGN_IN } = CONTEXT;
	const { isOpen } = useSelector(selectIsOpenGuestModal);

	const handleSignIn = (values, actions) => {
		const credentials = {
			...values
		};

		dispatch(loginAction(credentials));
	};

	useEffect(() => {
		dispatch(overlayActions.show(OVERLAY_STYLE_CLASSES.AUTH));

		return () => {
			dispatch(overlayActions.hide());
		}
	}, [dispatch]);

	const onOpenGuestModal = () => {
		dispatch(guestModalActions.show());
	};

	return (
		<AuthNavigation>
			{
				isOpen ? <GuestModal /> : null
			}

			<div className="body">

				<h1>{SIGN_IN.title}</h1>

				<AuthWrapper>

					<div className="link-mobile-wrapper">
						<Link to={UI_ROUTES.signUp} className="link sign-up">{SIGN_IN.mobile.footer.link}</Link>
					</div>

					<Button className="btn browse-as-guest" onClick={onOpenGuestModal}>
						<span>Browse as Guest</span>
					</Button>

					<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

					<div className="circleWrapper">
						<div className="circle">
							<div>OR</div>
						</div>
					</div>

					<AuthForm
						onSubmit={handleSignIn}
						context={SIGN_IN}
					/>
				</AuthWrapper>

			</div>
		</AuthNavigation>

	)
};

export default Login;
export { Login };
