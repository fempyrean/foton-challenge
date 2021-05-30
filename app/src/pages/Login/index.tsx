import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { View, Text, TextInput, Button } from 'react-native';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { userLogin } from '@features/auth/login/login.thunk';
import Input from '@components/Input';
import { UserCredentials } from './utils';

const schema = z.object({
	email: z.string().email().min(1),
	password: z.string().min(1),
});

const Login = () => {
	const dispatch = useAppDispatch();
	const { message, status } = useAppSelector(({ auth }) => auth);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (loginData: UserCredentials) => {
		await dispatch(userLogin(loginData));
	};

	return (
		<View>
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

			<Button title="Login" onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

export default Login;
