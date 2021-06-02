import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { userLogin } from '@features/auth/login/login.thunk';
import Input from '@components/Input';
import { UserCredentials } from './utils';
import { SignUpData } from '@features/auth/signup/signup.interfaces';
import { userSignUp } from '@features/auth/signup/signup.thunk';

import { Container, Button } from './styles';

const loginSchema = z.object({
	email: z.string().email().min(1),
	password: z.string().min(1),
});

const signUpSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email().min(1),
	password: z.string().min(1),
});

const Login = () => {
	const dispatch = useAppDispatch();
	const { message, status } = useAppSelector(({ auth }) => auth);
	const [signUp, setSignUp] = React.useState<boolean>(false);
	const {
		control,
		handleSubmit,
		reset,
		clearErrors,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(signUp ? signUpSchema : loginSchema),
	});

	const onSubmit = async (loginData: UserCredentials) => {
		await dispatch(userLogin(loginData));
	};
	const handleSignUp = async (signupData: SignUpData) => {
		const { email, password } = signupData;
		const { payload } = await dispatch(userSignUp(signupData));
		if (payload) {
			await dispatch(userLogin({ email, password }));
		}
	};
	const showSignUp = () => {
		reset();
		clearErrors();
		setSignUp(true);
	};

	return signUp ? (
		<Container>
			<Input
				label="First name"
				name="firstName"
				control={control}
				autoCapitalize="words"
				error={errors.firstName}
			/>
			<Input
				label="Last name"
				name="lastName"
				control={control}
				autoCapitalize="words"
				error={errors.lastName}
			/>
			<Input
				label="E-mail"
				name="email"
				control={control}
				autoCapitalize="words"
				error={errors.email}
			/>
			<Input
				label="Password"
				name="password"
				control={control}
				error={errors.password}
				secureTextEntry={true}
			/>
			<Button title="Sign up" onPress={handleSubmit(handleSignUp)} />
		</Container>
	) : (
		<Container>
			<Input
				label="E-mail"
				name="email"
				control={control}
				autoCapitalize="words"
				error={errors.email}
			/>
			<Input
				label="Password"
				name="password"
				control={control}
				error={errors.password}
				secureTextEntry={true}
			/>

			<Button title="Sign in" onPress={handleSubmit(onSubmit)} />
			<Button title="Sign up" onPress={showSignUp} />
		</Container>
	);
};

export default Login;
