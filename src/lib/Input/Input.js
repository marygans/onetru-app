import React from 'react';
import cn from 'classnames';

import { LibInput } from './Input.style';
import { propTypes, defaultProps } from '../forms/prop-types';

const Input = (props) => {
	const {
		field,
		form,
		...restProps
	} = props;

	const { name } = field;
	const { errors, touched } = form;
	const isError = Boolean(touched[name] && errors[name]);
	const errorClass = cn('', {
		'error': isError,
	});

	return (
		<LibInput className={errorClass}
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
