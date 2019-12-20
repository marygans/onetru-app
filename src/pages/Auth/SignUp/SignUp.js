import React, {useEffect} from 'react';
import firebase from 'firebase';
import {useDispatch, useSelector} from 'react-redux';
import {StyledFirebaseAuth} from 'react-firebaseui';

import uiConfig from '../../../firebase/uiFbConfig';

import {overlayActions} from '../../../redux/overlay/actions';
import {OVERLAY_STYLE_CLASSES} from '../../../constants/overlay';
import AuthForm from '../Form/Form';
import {CONTEXT} from '../../../constants/context';
import {AuthWrapper} from '../AuthWrapper.style';
import AuthNavigation from '../Navigation/AuthNavigation';
import Link from '../../../lib/Link';
import {UI_ROUTES} from '../../../constants/routes';
import Button from '../../../lib/Button/Button';
import Tabs from '../Tabs/Tabs';
import {selectIsOpenGuestModal} from '../../../redux/guestModal/selectors';
import GuestModal from '../GuestModal/GuestModal';
import {guestModalActions} from '../../../redux/guestModal/actions';
import {signUpWithEmailAndPassword} from '../../../redux/auth/actions';

const SignUp = () => {
	const dispatch = useDispatch();
	const { SIGN_UP } = CONTEXT;
	const { isOpen } = useSelector(selectIsOpenGuestModal);

	const handleSignUp = (values, actions) => {
		const credentials = {
			...values
		};
		dispatch(signUpWithEmailAndPassword(credentials));
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
					<Link to={UI_ROUTES.login} className="link sign-up">{SIGN_UP.footer.link}</Link>
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
