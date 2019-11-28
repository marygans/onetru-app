import * as PropTypes from 'prop-types';

export const propTypes = {

	field: PropTypes.shape({
		value    : PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
		onBlur   : PropTypes.func,
	}),

	form: PropTypes.shape({
		touched  : PropTypes.object,
		errors   : PropTypes.object,
	}),
};

export const defaultProps = {
	form: {
		touched : {},
		errors  : {},
	},
};
