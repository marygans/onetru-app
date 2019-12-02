import React from 'react';
import {OverlayWrapper} from './Overlay.style';
import {useSelector} from 'react-redux';
import {selectUiStatus} from '../../redux/compare/selector';

const Overlay = () => {

	const { isShow } = useSelector(selectUiStatus);

	return (
		<>
			{ isShow ? <OverlayWrapper /> : null }
		</>
	)
};

export default Overlay;
export { Overlay };
