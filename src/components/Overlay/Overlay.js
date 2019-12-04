import React from 'react';

import {OverlayWrapper} from './Overlay.style';

const Overlay = ({ styleClass }) => {

	return (
		<>
			{ styleClass ? <OverlayWrapper className={styleClass} /> : null }
		</>
	)
};

export default Overlay;
export { Overlay };
