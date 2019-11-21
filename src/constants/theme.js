const colors = {
	// absolute
	white: '#ffffff',
	black: '#000000',
	gray: '#c7c7c7',
	// named
	dark: '#444444',
	ghost: '#878787',
	error: '#d32f2f',
	warning: '#ffa000',
	info: '#1976d1',
	success: '#117700',
};

export const THEME = {
	colors: {
		...colors,
	},
	text: {
		main: colors.dark,
		second: colors.ghost,
		invert: colors.white,
		error: colors.error,
		warning: colors.warning,
		info: colors.info,
		success: colors.success,
	},
	border: {
		button: colors.dark,
		input: colors.gray,
		inputError: colors.dark,
	},
	bg: {
		button: colors.success,
		input: colors.white,
		inputError: colors.red,
		header: colors.ghost,
		footer: colors.success,
	},
	height: {
		header: 752,
		footer: 32,
	}
};
