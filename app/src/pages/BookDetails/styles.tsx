import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { HeaderProps } from './utils';

/** SVGs */
import Oval from '../../assets/images/Oval.svg';
import OvalSkewed from '../../assets/images/OvalSkewed.svg';
import OvalFilledBlue from '../../assets/images/OvalFilledBlue.svg';
import OvalFilledCoral from '../../assets/images/OvalFilledCoral.svg';
import OvalOutlinedSVG from '../../assets/images/OvalOutlined.svg';

export const Container = styled.ScrollView.attrs({
	contentContainerStyle: {
		flexGrow: 1,
	},
})`
	background: ${({ theme }) => theme.colors.light40};
`;

const HeaderContent = styled.View`
	background: ${({ theme }) => theme.colors.light30};
	height: 282px;
	border-bottom-right-radius: 100px;
`;
const Arrow = styled(Icon).attrs({
	name: 'arrow-back',
	size: 22,
})`
	position: absolute;
	top: 55px;
	left: 33px;
`;
const TopRightOval = styled(Oval)`
	position: absolute;
	right: 0px;
`;
const BottomRightOval = styled(OvalSkewed)`
	position: absolute;
	bottom: 0px;
	right: 130px;
`;
const BlueOval = styled(OvalFilledBlue)`
	position: absolute;
	top: 115px;
	left: 73px;
`;
const CoralOval = styled(OvalFilledCoral)`
	position: absolute;
	top: 125px;
	left: 46px;
`;
const OvalOutlined = styled(OvalOutlinedSVG)`
	position: absolute;
	top: 86px;
	left: 248px;
`;

const CoverContainer = styled.View`
	position: absolute;
	width: 151px;
	height: 234px;
	top: 84px;
	left: 113px;
	elevation: 10;
`;

const BookCover = styled.Image.attrs(({ cover }: any) => ({
	source: { uri: cover },
	resizeMode: 'contain',
}))`
	flex: 1;
	border-radius: 6px;
`;

export const Header = ({ cover }: HeaderProps) => {
	const navigation = useNavigation();

	return (
		<HeaderContent>
			<Arrow onPress={() => navigation.goBack()} />
			<TopRightOval />
			<BottomRightOval />
			<BlueOval />
			<CoralOval />
			<OvalOutlined />
			<CoverContainer>
				<BookCover cover={cover} />
			</CoverContainer>
		</HeaderContent>
	);
};
