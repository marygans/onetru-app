import React, {useRef, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {WrapperStyle} from './TopBar.style';
import Link from '../../lib/Link';
import Button from '../../lib/Button';

import {UI_ROUTES} from '../../constants/routes';
import {useVerticalParallax} from '../../utils/hooks/use-vertical-parallax';
import {selectIsRootPage} from '../../redux/router/selectors';
import {isLoggedInSelector} from '../../redux/auth/selector';
import {logout} from '../../redux/auth/actions';

const TopBar = ({ styleClass }) => {
	let wrapperRef = useRef();
	const dispatch = useDispatch();
	const {isRootPage} = useSelector(selectIsRootPage);
	const {loggedIn} = useSelector(isLoggedInSelector);

	useVerticalParallax(() => wrapperRef.current);

	const signOut = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);

	return (
		<WrapperStyle ref={wrapperRef} className={styleClass}>
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
						!loggedIn ? (
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
