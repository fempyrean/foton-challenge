import React from 'react';

import { Container, SearchIcon, ClearIcon, Input } from './styles';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { loadInitialBooks } from '@features/book/book.thunk';
import {
	setSearch as setGlobalSearch,
	unsetSearch,
} from '@features/book/book.slice';

const SearchBar = () => {
	const dispatch = useAppDispatch();
	const { search: globalSearch } = useAppSelector(({ books }) => books);

	const placeholderFontFamily = 'SFProText-Regular';
	const valueFontFamily = 'SFProText-Heavy';
	const [search, setSearch] = React.useState<string>(globalSearch);
	const [fontFamily, setFontFamily] = React.useState<string>(
		placeholderFontFamily,
	);

	const searchBook = async () => {
		dispatch(setGlobalSearch(search));
		await dispatch(loadInitialBooks(search));
	};
	const clearSearch = async () => {
		dispatch(unsetSearch());
		setSearch('');
		await dispatch(loadInitialBooks(''));
	};

	return (
		<Container>
			<SearchIcon />
			<Input
				ref={(ref) =>
					ref &&
					ref.setNativeProps({
						style: {
							fontFamily: search
								? valueFontFamily
								: placeholderFontFamily,
						},
					})
				}
				value={search}
				onChangeText={setSearch}
				style={{ fontFamily }}
				onEndEditing={searchBook}
			/>
			{search ? <ClearIcon onPress={clearSearch} /> : null}
		</Container>
	);
};

export default SearchBar;
