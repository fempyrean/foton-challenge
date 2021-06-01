import React from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { hexToRGB } from '../../utils';
import { BookProps } from './utils';

const Container = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	width: 105px;
	height: 200px;
`;
const Cover = styled.View`
	height: 153px;
	elevation: 5;
`;
const Footer = styled.View`
	margin: 9px 0px;
`;

const BookCover = styled.Image.attrs(({ cover }: any) => ({
	source: { uri: cover },
	resizeMode: 'cover',
}))<{ cover: string }>`
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

const Book = ({ title, author, cover }: BookProps) => {
	const navigation = useNavigation();

	const handleBookPress = () => {
		navigation.navigate('Details');
	};

	return (
		<Container onPress={handleBookPress}>
			<Cover>
				<BookCover cover={cover} />
			</Cover>
			<Footer>
				<Title>{title}</Title>
				<Author>by {author}</Author>
			</Footer>
		</Container>
	);
};

export default Book;
