import React from 'react';
import {useSelector} from 'react-redux';

import {OverlayWrapper} from './Overlay.style';
import {selectClass} from '../../redux/overlay/selectors';

const Overlay = () => {

	const { styleClass } = useSelector(selectClass);

	return (
		<>
			{ styleClass ? <OverlayWrapper className={styleClass} /> : null }
		</>
	)
};

export default Overlay;
export { Overlay };
