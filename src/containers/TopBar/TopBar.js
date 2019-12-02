import React, {useRef} from 'react';

import {WrapperStyle} from './TopBar.style';
import Link from '../../lib/Link';
import Button from '../../lib/Button';

import {UI_ROUTES} from '../../constants/routes';
import {useVerticalParallax} from '../../utils/hooks/use-vertical-parallax';
import {useSelector} from 'react-redux';
import {selectIsRootPage} from '../../redux/router/selectors';

const TopBar = () => {
	let wrapperRef = useRef();

	const { isRootPage } = useSelector(selectIsRootPage);

	useVerticalParallax(() => wrapperRef.current);

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
						<>
							<Button className="btn header-button">Get Started as Pro</Button>
							<Link to={UI_ROUTES.register} className="link">Sign up</Link>
							<Link to={UI_ROUTES.login} className="link">Login</Link>
						</>
					)
				}

			</div>
		</WrapperStyle>
	)
};

export default TopBar;
export {TopBar};
