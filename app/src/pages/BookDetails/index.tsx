import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Container, Header } from './styles';
import { RouteParams } from './utils';
import BookContent from './components/BookContent';
import FloatingActionBar from './components/FloatingActionBar';

const BookDetails = () => {
	const { params } = useRoute();
	const { book } = params as RouteParams;
	const { cover } = book;

	return (
		<>
			<Container>
				<Header cover={cover} />
				<BookContent book={book} />
			</Container>
			<FloatingActionBar />
		</>
	);
};
export default BookDetails;
