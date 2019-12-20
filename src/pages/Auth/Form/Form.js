import React from 'react';
import {Field, Form, Formik} from 'formik';

import {FormWrapper} from './Form.style';
import Input from '../../../lib/Input/Input';
import Button from '../../../lib/Button/Button';
import {signInSchema, signUpSchema} from '../../../utils/validators/auth';
import ErrorField from './ErrorField/ErrorField';
import Link from '../../../lib/Link';
import {UI_ROUTES} from '../../../constants/routes';
import {useSelector} from 'react-redux';
import {selectActiveTab} from '../../../redux/tabs/selectors';
import {Switch} from 'antd';
import InfoType from './InfoType';

const AuthForm = ({onSubmit, context, isSignUp = false}) => {
	const { activeTab } = useSelector(selectActiveTab);

	const initValues = {
		email: '',
		password: '',
		remember: false,
		isChangeTypeOfUser: false,
	};

	const initValuesSignUp = {
		...initValues,
		confirmPassword: '',
	};

	return (
		<FormWrapper>
			<Formik
				enableReinitialize
				initialValues={isSignUp ? initValuesSignUp : initValues}
				validationSchema={isSignUp ? signUpSchema : signInSchema}
				onSubmit={onSubmit}
			>
				{({values}) => (
					<Form id="login-form">
						<h1>
							{context.title}
						</h1>

						<div className="describe">
							{context.mobile[activeTab].title}
						</div>

						<div className="field">
							<Field name="email">
								{
									(fieldProps) => (
										<>
											<Input
												required
												autoComplete="email"
												placeholder={context.form.email}
												{...fieldProps}
											/>
											<ErrorField {...fieldProps} />
										</>
									)
								}
							</Field>
						</div>

						<div className="field">
							<Field name="password">
								{(fieldProps) => (
									<>
										<Input
											required
											autoComplete="password"
											type="password"
											placeholder={context.form.password}
											{...fieldProps}
										/>
										<ErrorField {...fieldProps} />
									</>
								)}
							</Field>
						</div>

						{
							isSignUp ?
								<div>

									<div className="field">
										<Field name="confirmPassword">
											{(fieldProps) => (
												<>
													<Input
														required
														autoComplete="password"
														type="password"
														placeholder={context.form.confirmPassword}
														{...fieldProps}
													/>
													<ErrorField {...fieldProps} />
												</>
											)}
										</Field>
									</div>

									<div className="field type-user-wrapper">
										<Field name="isChangeTypeOfUser"
										       type="checkbox"
										       checked={values.isChangeTypeOfUser}
										/>
										<InfoType isChangeTypeOfUser={values.isChangeTypeOfUser} />

									</div>

								</div>
								: null
						}

						<div className="remember-wrapper">
							<Field name="remember"
							       type="checkbox"
							       checked={values.remember}
							/>
							<span className="remember">Remember me</span>
						</div>

						<div className="mobile-forgot-password">
							<Link to={UI_ROUTES.forgotPassword} className="link forgot-password">Forgot password?</Link>
						</div>

						<div className="footer">
							<Button type="submit" className="submit">
								<span>
									{context.button}
								</span>
							</Button>

							<div className="wrapper-link">
								{
									isSignUp ? (
										<>
											<Link to={UI_ROUTES.login} className="link sign-in">Have an account? Log in</Link>
										</>
									) : (
										<>
											<Link to={UI_ROUTES.signUp} className="link sign-up">Sign up now</Link>
											<div className="break">|</div>
											<Link to={UI_ROUTES.forgotPassword} className="link forgot-password">Forgot password?</Link>
										</>
									)

								}

							</div>

						</div>


					</Form>
				)}
			</Formik>
		</FormWrapper>
	);
};

export default AuthForm;
export { AuthForm };
