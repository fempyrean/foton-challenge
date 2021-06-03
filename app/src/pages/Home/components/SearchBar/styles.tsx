import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Foundation';

export const Container = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	padding-left: 22px;
	padding-right: 22px;
	border-radius: 10px;
	margin-top: 50px;
	height: 48px;
	background: ${({ theme: { colors } }) => colors.light20};
	elevation: 2;
`;

export const SearchIcon = styled(Icon).attrs({
	name: 'magnifying-glass',
	size: 26,
	color: 'rgba(0,0,0,0.2)',
})`
	padding: 3px;
`;

export const ClearIcon = styled(Icon).attrs({
	name: 'x',
	size: 26,
	color: 'rgba(0,0,0,0.2)',
})`
	padding: 3px;
`;

export const Input = styled.TextInput.attrs(() => ({
	placeholder: 'Search book',
}))`
	flex: 1;
	font-size: 16px;
	line-height: 18px;
	padding-left: 10px;
`;
