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
	password: yup
		.string()
		.label('Password')
		.strict(false)
		.trim()
		.min(6)
		.max(255)
		.required(),
	confirmPassword: yup
		.string()
		.label('confirmPassword')
		.strict(false)
		.trim()
		.min(6)
		.max(255)
		.required(),
});
