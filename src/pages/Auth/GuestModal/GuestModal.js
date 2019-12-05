import React from 'react';

import {GuestWrapper} from './GuestModal.style';
import Button from '../../../lib/Button/Button';
import {history} from '../../../redux/store';
import {UI_ROUTES} from '../../../constants/routes';
import {useDispatch} from 'react-redux';
import {guestModalActions} from '../../../redux/guestModal/actions';
import {CONTEXT} from '../../../constants/context';

const GuestModal = () => {
	const dispatch = useDispatch();
	const { GUEST_BROWSER } = CONTEXT;

	const onGoToRoot = () => {
		dispatch(guestModalActions.hide());
		history.push(UI_ROUTES.root);
	};

	const onGoToSignUp = () => {
		dispatch(guestModalActions.hide());
		history.push(UI_ROUTES.signUp);
	};

	return (
		<GuestWrapper>

			<div className="content">
				<h1 className="title">{GUEST_BROWSER.title}</h1>

				<div className="describe">
					<span>
						{GUEST_BROWSER.describe}
				  </span>
				</div>

				<Button className="btn sing-up" onClick={onGoToSignUp}>
					<span>{GUEST_BROWSER.buttons.signUp}</span>
				</Button>

				<Button className="btn browse-as-guest" onClick={onGoToRoot}>
					<span>{GUEST_BROWSER.buttons.startBrowsing}</span>
				</Button>
			</div>

		</GuestWrapper>
	);
};

export default GuestModal;
export { GuestModal };
