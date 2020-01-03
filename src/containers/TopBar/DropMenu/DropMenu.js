import React from 'react';
import {Icon, Menu} from 'antd';

import {AvatarStyle, DropMenuStyle, MenuStyle} from './DropMenu.style';
import Button from '../../../lib/Button/Button';
import SettingsSVG from './svg/settings';
import DiscountSVG from './svg/discount';
import HelpSVG from './svg/help';

const menu = (signOut) => {

	return (
		<MenuStyle>
			<Menu.Item key="0">
				<span className="item"><Icon component={SettingsSVG} style={{ fontSize: '32px' }} />Account Settings</span>
			</Menu.Item>

			<Menu.Item key="1">
				<span className="item"><Icon component={DiscountSVG} /> My Discounts</span>
			</Menu.Item>

			<Menu.Item key="3">
				<span className="item"><Icon component={HelpSVG} /> Help</span>
			</Menu.Item>

			<Menu.Item key="4">
				<Button className="item button" onClick={signOut}>Sign out</Button>
			</Menu.Item>
		</MenuStyle>
	)
};

const DropMenu = ({user, signOut}) => {

	return (
		<>
			<span>{user.displayName}</span>
			<DropMenuStyle overlay={() => menu(signOut)} trigger={['click']} >
				<AvatarStyle  size={55} icon="user" src={user.photoURL} />
			</DropMenuStyle>
		</>
	);

};

export default DropMenu;
export { DropMenu };
