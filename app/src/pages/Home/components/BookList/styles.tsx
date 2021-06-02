import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Meta } from '@features/book/book.interfaces';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { loadMoreBooks } from '@features/book/book.thunk';
import { BookStatus } from '@features/book/book.enums';

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding-bottom: 25px;
	background: #fefbf8;
`;
const Content = styled.Text``;
const EmptyListAnimation = styled(LottieView).attrs({
	source: require('../../../../assets/animations/no-results.json'),
})`
	width: 100%;
	height: 75%;
	align-self: center;
	background: #fefbf8;
	padding: 0px;
	margin: 0px;
`;
const EmptyListText = styled.Text`
	font-family: 'SFProText-Heavy';
	line-height: 19px;
	color: ${({ theme }) => theme.colors.d20};
	text-align: left;
	margin-bottom: 5px;
`;
const EmptyListAddBookTouchable = styled.TouchableOpacity.attrs({
	activeOpacity: 0.8,
})`
	background: ${({ theme }) => theme.colors.coral};
	align-self: center;
	margin: 25px 0px;
	padding: 10px;
	border-radius: 5px;
	flex-direction: row;
	align-items: center;
`;
const EmptyListAddBookText = styled.Text`
	text-transform: uppercase;
	font-family: 'SFProText-Heavy';
	margin-right: 10px;
	color: ${({ theme }) => theme.colors.light90};
`;
const AddBookIcon = styled(Icon).attrs({
	name: 'book-plus',
})``;

export const EmptyBookList = () => {
	const navigation = useNavigation();
	const animationRef = React.useRef<any>(null);

	React.useEffect(() => {
		animationRef?.current?.play();
	}, []);

	const handlePress = () => {
		navigation.navigate('AddBook', { useGlobalSearchAsName: true });
	};

	return (
		<Container>
			<EmptyListAnimation ref={animationRef} />
			<EmptyListText>
				We couldn't find the book you were looking for, sorry... but you
				can always add the book yourself and help us grow our library ;)
			</EmptyListText>
			<EmptyListAddBookTouchable onPress={handlePress}>
				<EmptyListAddBookText>Add book</EmptyListAddBookText>
				<AddBookIcon size={22} color="#fff" />
			</EmptyListAddBookTouchable>
		</Container>
	);
};

const ErrorListAnimation = styled(LottieView).attrs({
	source: require('../../../../assets/animations/unknown-error.json'),
})`
	width: 100%;
	height: 60%;
	align-self: center;
	justify-content: center;
	align-items: center;
	background: #fff;
`;
const ErrorListText = styled(EmptyListText)`
	font-family: 'SFProText-Medium';
	font-size: 16px;
	margin-bottom: 10px;
`;
const ErrorListTextItalic = styled(ErrorListText)`
	font-family: 'SFProText-LightItalic';
`;

export const ErrorBookList = () => {
	const animationRef = React.useRef<any>(null);

	React.useEffect(() => {
		animationRef?.current?.play();
	}, []);

	return (
		<Container style={{ backgroundColor: '#fff' }}>
			<ErrorListAnimation ref={animationRef} />
			<ErrorListText>
				Oh noes, a wild error appeared.{'\n'}Due to time limitations,
				some things might be slightly buggy, it's recommended you go
				curse at the developer at
				<ErrorListTextItalic>
					{' '}
					frempyrean@gmail.com.
				</ErrorListTextItalic>
			</ErrorListText>
			<ErrorListTextItalic style={{ fontSize: 12 }}>
				Or if you consider yourself to be somewhat of a diplomat, you
				can take a more peaceful approach and offer him a Corgi puppy in
				exchange of fixing all the bugs, he will most likely take you up
				on that.
			</ErrorListTextItalic>
		</Container>
	);
};

const LoadMore = styled.TouchableOpacity.attrs({ activeOpacity: 0.75 })`
	background: ${({ theme, disabled }) =>
		disabled ? theme.colors.d0 : theme.colors.buttonBg};
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	height: 48px;
	margin: 25px 0px;
	elevation: 4;
`;
const LoadMoreTitle = styled.Text`
	font-family: 'SFProText-Medium';
	font-size: 24px;
	line-height: 29px;
	color: ${({ theme }) => theme.colors.light90};
`;

export const Footer = () => {
	const dispatch = useAppDispatch();
	const { meta, search, books, status } = useAppSelector(
		({ books }) => books,
	);
	const { currentPage = 1, totalPages = 1 } = (meta ?? {}) as Meta;

	const fetchMoreBooks = async () => {
		const nextPage = currentPage + 1;
		await dispatch(loadMoreBooks({ search, page: nextPage }));
	};

	const shouldLoadMore = currentPage < totalPages;

	if (books.length <= 0) return null;

	return (
		<LoadMore onPress={fetchMoreBooks} disabled={!shouldLoadMore}>
			{status === BookStatus.FETCHING ? (
				<ActivityIndicator size="large" color="#fff" />
			) : (
				<LoadMoreTitle>
					{shouldLoadMore ? 'Load more books' : 'No more books'}
				</LoadMoreTitle>
			)}
		</LoadMore>
	);
};
