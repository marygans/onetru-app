import React from 'react';

import { LibInput } from './Input.style';
import { propTypes, defaultProps } from '../forms/prop-types';

const Input = (props) => {
	const {
		field,
		form,
		...restProps
	} = props;

	return (
		<LibInput
			{...field}
			{...restProps}
		/>
	);
};

Input.propTypes = {
	...propTypes,
};

Input.defaultProps = {
	...defaultProps,
};

export default Input;
export { Input };
