import React, {useRef, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {WrapperStyle} from './TopBar.style';
import Link from '../../lib/Link';
import Button from '../../lib/Button';

import {UI_ROUTES} from '../../constants/routes';
import {useVerticalParallax} from '../../utils/hooks/use-vertical-parallax';
import {selectIsRootPage} from '../../redux/router/selectors';
import {isLoggedInSelector, userSelector} from '../../redux/auth/selector';
import {logout} from '../../redux/auth/actions';
import {DropMenu} from './DropMenu';

const TopBar = ({ styleClass }) => {
	let wrapperRef = useRef();
	const dispatch = useDispatch();
	const {isRootPage} = useSelector(selectIsRootPage);
	const {loggedIn} = useSelector(isLoggedInSelector);
	const {user} = useSelector(userSelector);

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
								<DropMenu user={user} signOut={signOut} />
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
