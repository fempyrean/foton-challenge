import React from 'react';
import styled from 'styled-components/native';

import { hexToRGB } from '../../utils';

const Container = styled.View`
	width: 105px;
`;
const Cover = styled.View`
	height: 153px;
	padding: 1px;
	elevation: 5;
`;
const Footer = styled.View`
	margin: 9px 0px;
`;

const BookCover = styled.Image.attrs(() => ({
	source: { uri: 'https://bit.ly/3vDbehy' },
	resizeMode: 'cover',
}))`
	flex: 1;
	border-radius: 5px;
`;
const Title = styled.Text.attrs(() => ({
	numberOfLines: 1,
}))`
	font-family: 'SFProText-Semibold';
	font-size: 12px;
	line-height: 14px;
	color: ${({ theme }) => hexToRGB(theme.colors.d10, 0.8)};
`;
const Author = styled.Text.attrs(() => ({
	numberOfLines: 1,
}))`
	font-family: 'Roboto-Black';
	font-size: 10px;
	line-height: 12px;
	color: ${({ theme }) => hexToRGB(theme.colors.d10, 0.8)};
`;

const Book = () => {
	return (
		<Container>
			<Cover>
				<BookCover />
			</Cover>
			<Footer>
				<Title>The Fellowship of the Ring</Title>
				<Author>by J.R.R. Tolkien</Author>
			</Footer>
		</Container>
	);
};

export default Book;
