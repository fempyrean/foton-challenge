import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import { unsetUser } from '@features/auth/auth.slice';
import { useAppDispatch } from '@redux/hooks';

export const Container = styled(LinearGradient).attrs({
	colors: ['#fefbf8', '#fffcf9'],
})`
	flex: 1;
	padding: 0px 20px;
	padding-top: 50px;
	justify-content: center;
	align-items: flex-start;
`;

export const Text = styled.Text`
	font-family: 'SFProText-Semibold';
	font-size: 16px;
	text-align: left;
`;

const SignOutContainer = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
	background: skyblue;
	align-self: center;
	margin: 25px 0px;
	padding: 10px;
	border-radius: 5px;
	flex-direction: row;
	align-items: center;
`;
const SignOutText = styled.Text`
	text-transform: uppercase;
	font-family: 'SFProText-Medium';
	margin-right: 10px;
`;

export const SignOut = () => {
	const dispatch = useAppDispatch();

	const signOut = async () => {
		await dispatch(unsetUser());
	};

	return (
		<SignOutContainer onPress={signOut}>
			<SignOutText>Sign out</SignOutText>
			<Icon name="exit-outline" size={22} />
		</SignOutContainer>
	);
};
