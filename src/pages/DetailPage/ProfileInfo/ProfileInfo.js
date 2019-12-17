import React from 'react';
import {ProfileInfoStyle} from './ProfileInfo.style';

const ProfileInfo = ({description}) => {

	return (
		<ProfileInfoStyle>
			<div className="title">Company profile</div>
			<div className="description">{description}</div>
		</ProfileInfoStyle>
	);

};

export default ProfileInfo;
export { ProfileInfo };
