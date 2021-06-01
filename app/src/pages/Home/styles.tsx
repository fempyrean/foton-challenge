import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { getTitleFont, getTitleColor } from './utils';

// <LinearGradient
// 	colors={['#f00', '#fefbf8', '#fffcf9']}
// 	style={{ flex: 1 }}
// >

export const Container = styled(LinearGradient).attrs({
	colors: ['#fefbf8', '#fffcf9'],
})`
	flex: 1;
	padding: 0px 20px;
	padding-top: 50px;
	/* background: #fffbf8; */
`;

export const Title = styled.Text<{ variant?: string }>`
	font-family: ${({ variant }) => getTitleFont(variant)};
	font-size: 24px;
	line-height: 29px;
	color: ${({ variant, theme }) => getTitleColor(variant, theme)};
	margin-top: 30px;
	margin-bottom: 38px;
	margin-left: 1px;
`;

export const PageTitle = ({ name }: any) => {
	return (
		<Title>
			Hi, <Title variant="bold">{name}</Title>
		</Title>
	);
};
