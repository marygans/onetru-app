import React from 'react';
import * as PropTypes from 'prop-types';
import cn from 'classnames';
import {ErrorFieldWrapper} from './ErrorField.style';

const ErrorField = (props) => {
	const {form, field} = props;
	const { name } = field;
	const { errors, touched } = form;
	const isError = Boolean(touched[name] && errors[name]);

	const errorClass = cn('form-error', {
		'visible': isError,
	});

	return (
		<ErrorFieldWrapper className={errorClass}>
			{errors[name]}
		</ErrorFieldWrapper>
	);
};

ErrorField.propTypes = {
	noMargin: PropTypes.bool,
	error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

ErrorField.defaultProps = {
	error: false,
};

export default ErrorField;
export { ErrorField };
