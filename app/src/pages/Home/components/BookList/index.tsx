import React from 'react';
import styled from 'styled-components/native';
import { Animated, FlatList } from 'react-native';

import Book from '@components/Book';
import { getItemAlignment } from './utils';

const bookData = {
	title: 'The Fellowship of the Ring',
	author: 'J.R.R. Tolkien',
	cover: 'https://bit.ly/3vDbehy',
};
const data = [
	bookData,
	bookData,
	bookData,
	bookData,
	bookData,
	bookData,
	bookData,
	bookData,
	bookData,
	bookData,
	bookData,
	bookData,
];
interface Book {
	title: string;
	author: string;
	cover: string;
}

const ItemContainer = styled(Animated.View)<{ alignment: string }>`
	flex: 1;
	align-items: ${({ alignment }) => alignment};
`;

const ROUGH_ITEM_HEIGHT = 200;

const BookList = () => {
	const scrollY = React.useRef(new Animated.Value(0)).current;

	const renderBook = ({ item, index }: any) => {
		const rowIndex = Math.floor(index / 3);
		const { title, author, cover } = item as Book;

		const opacityInputRange = [
			-1,
			0,
			ROUGH_ITEM_HEIGHT * rowIndex,
			ROUGH_ITEM_HEIGHT * Math.round(rowIndex + 0.5),
		];

		const opacity = scrollY.interpolate({
			inputRange: opacityInputRange,
			outputRange: [1, 1, 1, 0],
		});

		return (
			<ItemContainer
				alignment={getItemAlignment(index)}
				style={{ opacity }}
			>
				<Book title={title} author={author} cover={cover} />
			</ItemContainer>
		);
	};

	return (
		<>
			<Animated.FlatList
				data={data}
				renderItem={renderBook}
				keyExtractor={(item, index) => String(index)}
				horizontal={false}
				numColumns={3}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: ROUGH_ITEM_HEIGHT + ROUGH_ITEM_HEIGHT / 2,
				}}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: true },
				)}
			/>
		</>
	);
};

export default BookList;
