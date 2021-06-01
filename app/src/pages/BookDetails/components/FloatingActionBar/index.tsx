import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { hexToRGB } from '@utils/index';
/** Icons */
import BookOpenSVG from '../../../../assets/images/BookOpen.svg';
import HeadphonesSVG from '../../../../assets/images/Headphones.svg';
import ShareSVG from '../../../../assets/images/Share.svg';

const Container = styled.View`
	width: 335px;
	position: absolute;
	bottom: 53px;
	align-self: center;
	background: ${({ theme }) => theme.colors.light90};
	flex-direction: row;
	border-radius: 2px;
	elevation: 10;
	padding: 23px 0px;
`;

const Button = styled.TouchableOpacity<{ center?: boolean }>`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	/* height: 56px; */
	/* padding: 16px 0px; */
	border-left-width: ${({ center }) =>
		center ? StyleSheet.hairlineWidth : 0}px;
	border-right-width: ${({ center }) =>
		center ? StyleSheet.hairlineWidth : 0}px;
	border-color: ${({ theme }) => hexToRGB(theme.colors.d40, 0.2)};
`;
const ButtonTitle = styled.Text`
	font-family: 'SFProText-Heavy';
	font-size: 14px;
	line-height: 16.71px;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.colors.d30};
	margin-left: 10px;
`;

const BookOpenIcon = styled(BookOpenSVG)``;
const HeadphonesIcon = styled(HeadphonesSVG)``;
const ShareIcon = styled(ShareSVG)``;

const FloatingActionBar = () => {
	return (
		<Container>
			<Button>
				<BookOpenIcon />
				<ButtonTitle>Read</ButtonTitle>
			</Button>
			<Button center={true}>
				<HeadphonesIcon />
				<ButtonTitle>Listen</ButtonTitle>
			</Button>
			<Button>
				<ShareIcon />
				<ButtonTitle>Share</ButtonTitle>
			</Button>
		</Container>
	);
};

export default FloatingActionBar;
