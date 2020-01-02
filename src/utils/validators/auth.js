import * as yup from 'yup';

export const signInSchema = yup.object().shape({
	email: yup
		.string()
		.label('E-mail')
		.strict(false)
		.trim()
		.email()
		.required(),
	password: yup
		.string()
		.label('Password')
		.strict(false)
		.trim()
		.min(6)
		.max(255)
		.required(),
});

export const signUpSchema = yup.object().shape({
	email: yup
		.string()
		.label('E-mail')
		.strict(false)
		.trim()
		.email()
		.required(),
	name: yup
		.string()
		.label('Name')
		.strict(false)
		.trim()
		.required(),
	password: yup
		.string()
		.label('Password')
		.strict(false)
		.trim()
		.min(6, 'Password must be at least 6 characters')
		.max(255)
		.required('Password is required'),
	confirmPassword: yup
		.string()
		.label('Confirm Password')
		.strict(false)
		.trim()
		.min(6, 'Confirm Password must be at least 6 characters')
		.max(255)
		.required()
		.oneOf(
			[yup.ref('password')],
			'Passwords do not match',
		)
});
