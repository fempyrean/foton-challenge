import React from 'react';
import styled from 'styled-components/native';

import { BookContentProps } from './utils';
import { hexToRGB } from '@utils/index';

const Container = styled.View`
	padding: 67px 20px 120px 20px;
`;

const Title = styled.Text`
	font-family: 'SFProText-Semibold';
	font-size: 24px;
	line-height: 29px;
	color: ${({ theme }) => theme.colors.d60};
`;

const Author = styled.Text`
	font-family: 'SFProText-Medium';
	font-size: 16px;
	line-height: 18.75px;
	letter-spacing: 0.67px;
	color: ${({ theme }) => theme.colors.coral};
	margin-top: 7px;
`;
const DescriptionBox = styled.View`
	margin-top: 10px;
`;
const Description = styled.Text`
	font-family: 'SFProText-Regular';
	font-size: 14px;
	line-height: 25px;
	letter-spacing: 0.2px;
	color: ${({ theme }) => hexToRGB(theme.colors.d10, 0.6)};
`;

const BookContent = ({ book }: BookContentProps) => {
	const { name, author, description } = book;

	return (
		<Container>
			<Title>{name}</Title>
			<Author>{author}</Author>
			<DescriptionBox>
				<Description>{description}</Description>
			</DescriptionBox>
		</Container>
	);
};

export default BookContent;
