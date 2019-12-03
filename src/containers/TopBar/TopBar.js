import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {WrapperStyle} from './TopBar.style';
import Link from '../../lib/Link';
import Button from '../../lib/Button';

import {UI_ROUTES} from '../../constants/routes';
import {useVerticalParallax} from '../../utils/hooks/use-vertical-parallax';
import {selectIsRootPage} from '../../redux/router/selectors';
import {selectIsAuth} from '../../redux/profile/selectors';
import {authActions} from '../../redux/auth/actions';
import {auth} from '../../firebase';

const TopBar = () => {
	let wrapperRef = useRef();
	const dispatch = useDispatch();
	const {isRootPage} = useSelector(selectIsRootPage);
	const {isAuth} = useSelector(selectIsAuth);

	useVerticalParallax(() => wrapperRef.current);

	const signOut = () => {
		dispatch(authActions.signOut());
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(function (user) {
			if (!!user) {
				dispatch(authActions.setCredentials(user));
			} else {
				signOut();
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<WrapperStyle ref={wrapperRef}>
			<div className="left">
				<Link to={UI_ROUTES.root} className="link-wrapper-by-logo">
					<div className="logos-wrapper">
						<div className="logo"/>
					</div>
				</Link>
			</div>

			<div className="right">
				{
					isRootPage && (
						!isAuth ? (
							<>
								<Button className="btn header-button">Get Started as Pro</Button>
								<Link to={UI_ROUTES.signUp} className="link">Sign up</Link>
								<Link to={UI_ROUTES.login} className="link">Login</Link>
							</>
						) : (
							<>
								<Button className="btn link sign-out" onClick={signOut}>Sign out</Button>
							</>
						)
					)
				}

			</div>
		</WrapperStyle>
	)
};

export default TopBar;
export {TopBar};
