import React from 'react';

import {WrapperStyle} from './TopBar.style';
import Link from '../../lib/Link';
import Button from '../../lib/Button';

import {UI_ROUTES} from '../../constants/routes';

const TopBar = () => {

    return (
        <WrapperStyle>
            <div className="left"></div>
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
