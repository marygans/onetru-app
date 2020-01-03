import React from 'react';

import { Spin, Icon } from 'antd';
import {SpinnerStyle} from './Spinner.style';

const Spinner = () => {
	const antIcon = <Icon type="loading" style={{ fontSize: 42 }} spin />;

	return (
		<SpinnerStyle>
			<Spin indicator={antIcon} />
		</SpinnerStyle>
	)
};

export default Spinner;
export { Spinner };
