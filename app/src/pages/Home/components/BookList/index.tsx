import React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/** Redux */
import { Book as IBook } from '@features/book/book.interfaces';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { selectBooks } from '@features/book/book.slice';
import { loadInitialBooks } from '@features/book/book.thunk';
/** Components */
import Book from '@components/Book';
import { EmptyBookList, ErrorBookList, Footer } from './styles';
import { getItemAlignment } from './utils';
import { BookStatus } from '@features/book/book.enums';

const ITEM_HEIGHT = 200;

const ItemContainer = styled(Animated.View)<{ alignment: string }>`
	flex: 1;
	align-items: ${({ alignment }) => alignment};
`;

const BookList = () => {
	const navigation = useNavigation();
	const dispatch = useAppDispatch();
	const books = useAppSelector(selectBooks);
	const { status } = useAppSelector(({ books }) => books);
	const scrollY = React.useRef(new Animated.Value(0)).current;

	React.useEffect(() => {
		dispatch(loadInitialBooks(''));
	}, []);

	const renderBook = ({ item, index }: any) => {
		const rowIndex = Math.floor(index / 3);
		const { name, author, cover } = item as IBook;

		const opacityInputRange = [
			-1,
			0,
			ITEM_HEIGHT * rowIndex,
			ITEM_HEIGHT * Math.round(rowIndex + 0.5),
		];

		const opacity = scrollY.interpolate({
			inputRange: opacityInputRange,
			outputRange: [1, 1, 1, 0],
		});

		return (
			<ItemContainer
				alignment={getItemAlignment(index, books.length)}
				style={{ opacity }}
			>
				<Book
					title={name}
					author={author}
					cover={cover}
					onPress={() =>
						navigation.navigate('Details', { book: item })
					}
				/>
			</ItemContainer>
		);
	};

	if (status === BookStatus.ERROR) return <ErrorBookList />;
	if (status !== BookStatus.FETCHING && books.length <= 0)
		return <EmptyBookList />;

	return (
		<>
			<Animated.FlatList
				ListEmptyComponent={<EmptyBookList />}
				ListFooterComponent={<Footer />}
				data={books}
				renderItem={renderBook}
				keyExtractor={(item, index) => String(index)}
				horizontal={false}
				numColumns={3}
				showsVerticalScrollIndicator={false}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: scrollY } } }],
					{ useNativeDriver: true },
				)}
			/>
		</>
	);
};

export default BookList;
