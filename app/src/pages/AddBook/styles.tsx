import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';

import { ButtonProps } from './utils';

export const Container = styled(LinearGradient).attrs({
	colors: ['#fffcf9', '#fbf4ee'],
})`
	flex: 1;
	padding: 0px 27px 0px 27px;
`;

export const Scrollable = styled.ScrollView.attrs({
	flexGrow: 1,
	showsVerticalScrollIndicator: false,
	keyboardShouldPersistTaps: 'always',
})``;

export const Title = styled.Text`
	font-family: 'SFProText-Semibold';
	font-size: 24px;
	line-height: 28.64px;
	margin-bottom: 57px;
	margin-top: 53px;
	color: ${({ theme }) => theme.colors.coral};
`;

const AddBook = styled.TouchableOpacity.attrs({ activeOpacity: 0.75 })`
	background: ${({ theme, disabled }) =>
		disabled ? theme.colors.d0 : theme.colors.buttonBg};
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	height: 48px;
	margin: 25px 0px;
`;
const AddBookTitle = styled.Text`
	font-family: 'SFProText-Medium';
	font-size: 24px;
	line-height: 29px;
	color: ${({ theme }) => theme.colors.light90};
`;

export const Button = ({ loading = false, onPress }: ButtonProps) => {
	return (
		<AddBook onPress={onPress}>
			{loading ? (
				<ActivityIndicator size="large" color="#fff" />
			) : (
				<AddBookTitle>Add new book</AddBookTitle>
			)}
		</AddBook>
	);
};
