import React from 'react';
import {AuthNavigationWrapper} from './AuthNavigation.style';

const AuthNavigation = ({ children, ...props }) => {

	return (
		<AuthNavigationWrapper>
			{children}
		</AuthNavigationWrapper>
	)
};

export default AuthNavigation;
export { AuthNavigation };
