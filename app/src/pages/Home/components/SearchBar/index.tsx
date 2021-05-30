import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Foundation';

const Container = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	padding-left: 22px;
	padding-right: 22px;
	border-radius: 10px;
	height: 48px;
	background: ${({ theme: { colors } }) => colors.light20};
	elevation: 4;
`;

const SearchIcon = styled(Icon).attrs({
	name: 'magnifying-glass',
	size: 26,
	color: 'rgba(0,0,0,0.2)',
})`
	padding: 3px;
`;

const Input = styled.TextInput.attrs(() => ({
	placeholder: 'Search book',
}))`
	flex: 1;
	font-size: 16px;
	line-height: 18px;
	padding-left: 10px;
`;

const SearchBar = () => {
	const placeholderFontFamily = 'SFProText-Regular';
	const valueFontFamily = 'SFProText-Heavy';
	const [search, setSearch] = React.useState<string>('');
	const [fontFamily, setFontFamily] = React.useState<string>(
		placeholderFontFamily,
	);

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
			/>
		</Container>
	);
};

export default SearchBar;
