import React, {useEffect} from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui';
import {useDispatch, useSelector} from 'react-redux';

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
import Tabs from '../Tabs/Tabs';
import {selectIsOpenGuestModal} from '../../../redux/guestModal/selectors';
import GuestModal from '../GuestModal/GuestModal';
import {guestModalActions} from '../../../redux/guestModal/actions';

const Login = () => {
	const dispatch = useDispatch();
	const { SIGN_IN } = CONTEXT;
	const { isOpen } = useSelector(selectIsOpenGuestModal);

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

	const onOpenGuestModal = () => {
		dispatch(guestModalActions.show());
	};

	return (
		<AuthNavigation>
			{
				isOpen ? <GuestModal /> : <Tabs />
			}

			<AuthWrapper>

				<div className="link-mobile-wrapper">
					<Link to={UI_ROUTES.signUp} className="link sign-up">{SIGN_IN.mobile.footer.link}</Link>
				</div>

				<Button className="btn browse-as-guest" onClick={onOpenGuestModal}>
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
					context={SIGN_IN}
				/>
			</AuthWrapper>
		</AuthNavigation>

	)
};

export default Login;
export { Login };
