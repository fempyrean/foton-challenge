import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		flexGrow: 1,
		justifyContent: 'center',
	},
	keyboardShouldPersistTaps: 'always',
})`
	padding: 20px;
	background: #fffcf9;
`;

const BtnContainer = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
	background: #1d97b9;
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin: 5px 0px;
	border-radius: 5px;
	elevation: 2;
`;
const BtnText = styled.Text`
	font-family: 'SFProText-Semibold';
	text-transform: uppercase;
	color: #fff;
`;

export const Button = ({ title, onPress }: any) => {
	return (
		<BtnContainer onPress={onPress}>
			<BtnText>{title}</BtnText>
		</BtnContainer>
	);
};
