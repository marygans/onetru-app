import React, { useRef } from 'react';

import {WrapperStyle} from './TopBar.style';
import Link from '../../lib/Link';
import Button from '../../lib/Button';

import {UI_ROUTES} from '../../constants/routes';
import {useVerticalParallax} from '../../utils/hooks/use-vertical-parallax';

const TopBar = () => {
    let wrapperRef = useRef();

  useVerticalParallax(() => wrapperRef.current);

    return (
        <WrapperStyle ref={wrapperRef}>
            <div className="left">
              <div className="logos-wrapper">
                <div className="logo" />
              </div>
            </div>

            <div className="right">
                <Button className="btn">Get Started as Pro</Button>
                <Link to={UI_ROUTES.register} className="link">Sign up</Link>
                <Link to={UI_ROUTES.login} className="link">Login</Link>
            </div>
        </WrapperStyle>
    )
};

export default TopBar;
export { TopBar };
