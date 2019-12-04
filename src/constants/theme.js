import {IMAGES} from './resources';

const colors = {
	// absolute
	white: '#ffffff',
	whiteWithEasilyGray: '#E5E5E5',
	black: '#303030',
	gray: '#9D9D9D',
	grayEasyDark: '#8D8D8D',
	grayLight: '#E0E0E0',
	grayEasyLight: '#AFAFAF',
	filterText: '#9A9A9A',
	// named
	dark: '#444444',
	ghost: '#878787',
	ghostWithDark: '#6B6B6B',
	error: '#DF4930',
	warning: '#ffa000',
	info: '#1976d1',
	success: '#117700',
	successDark: '#0D5701',
	matte: '#F5F5F5',
	rootRectangle: 'rgba(37, 36, 36, 0.55)',
	resultPageRectangle: 'rgba(0, 0, 0, 0.6)',
	priceColor: '#484848',
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
		inputError: colors.error,
		header: colors.ghost,
		footer: colors.success,
		img: IMAGES.BACKGROUND,
		result: IMAGES.RESULT_BACKGROUND,
	},
	height: {
		header: 0,
		footer: 256,
	},
	maxWidth: {
		header: 1440,
	},
};
