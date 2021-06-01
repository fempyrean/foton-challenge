import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import { Meta } from '@features/book/book.interfaces';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { loadMoreBooks } from '@features/book/book.thunk';

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
const Content = styled.Text``;

export const EmptyBookList = () => {
	return (
		<Container>
			<Content>Show no results here!</Content>
		</Container>
	);
};

export const ErrorBookList = () => {
	return (
		<Container>
			<Content>Add error message here!</Content>
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
	const { meta, search } = useAppSelector(({ books }) => books);
	const { currentPage = 1, totalPages = 1 } = (meta ?? {}) as Meta;
	const [loading, setLoading] = React.useState<boolean>(false);

	const fetchMoreBooks = async () => {
		const nextPage = currentPage + 1;
		await dispatch(loadMoreBooks({ search, page: nextPage }));
	};

	const shouldLoadMore = currentPage < totalPages;

	return (
		<LoadMore onPress={fetchMoreBooks} disabled={!shouldLoadMore}>
			{loading ? (
				<ActivityIndicator size="large" color="#fff" />
			) : (
				<LoadMoreTitle>
					{shouldLoadMore ? 'Load more books' : 'No more books'}
				</LoadMoreTitle>
			)}
		</LoadMore>
	);
};
