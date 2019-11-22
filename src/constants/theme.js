import {IMAGES} from './resources';

const colors = {
	// absolute
	white: '#ffffff',
	black: '#303030',
	gray: '#9D9D9D',
	grayLight: '#E0E0E0',
	// named
	dark: '#444444',
	ghost: '#878787',
	error: '#d32f2f',
	warning: '#ffa000',
	info: '#1976d1',
	success: '#117700',
	successDark: '#0D5701',
	matte: '#F5F5F5',
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
		img: IMAGES.BACKGROUND,
	},
	height: {
		header: 0,
		footer: 256,
	},
	maxWidth: {
		header: 1440,
	}
};
