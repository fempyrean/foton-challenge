import React from 'react';
import styled from 'styled-components/native';
import { useController } from 'react-hook-form';

import { TextInputProps } from './utils';

const Label = styled.Text`
	color: ${({ theme }) => theme.colors.d90};
	font-family: 'SFProText-Semibold';
	font-size: 16px;
	line-height: 18px;
	margin-bottom: 10px;
`;

const CustomInput = styled.TextInput<{ error: boolean }>`
	background: ${({ theme: { colors }, error }) =>
		error ? colors.errorLight : colors.light20};
	border-radius: 10px;
	font-family: 'SFProText-Medium';
	font-size: 16px;
	padding-left: 5px;
	padding-right: 2px;
	margin-bottom: 10px;
	elevation: 3;
`;

const Input = ({
	label,
	name,
	control,
	error = false,
	...props
}: TextInputProps) => {
	const { field } = useController({ name, control });

	return (
		<>
			<Label>{label}</Label>
			<CustomInput
				value={field.value}
				onChangeText={field.onChange}
				error={error}
				autoCorrect={false}
				{...props}
			/>
		</>
	);
};

export default Input;
