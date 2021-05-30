import React from 'react';
import styled from 'styled-components/native';

import { getTitleFont, getTitleColor } from './utils';

export const Container = styled.View`
	padding: 20px;
	padding-top: 50px;
	background: #fffcf9;
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
