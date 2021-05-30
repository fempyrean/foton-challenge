import React from 'react';

import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import { Container, PageTitle } from './styles';
import { useAppSelector } from '@redux/hooks';
import { selectUser } from '@features/auth/auth.slice';
import { User } from '@features/auth/auth.interfaces';

const Home = () => {
	const user = useAppSelector(selectUser);
	const { firstName } = user as User;

	return (
		<Container>
			<SearchBar />
			<PageTitle name={firstName} />
			<BookList />
		</Container>
	);
};

export default Home;
