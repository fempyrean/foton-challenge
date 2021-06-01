import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';

import Home from '@pages/Home';
import Details from '@pages/BookDetails';
import AddBook from '@pages/AddBook';
import authInterceptor from '@features/auth/auth.interceptor';

import api from '@services/api';
import store from '@redux/store';

const HomeTabs = createBottomTabNavigator();
const getHomeTabs = () => {
	const { colors } = useTheme();

	return (
		<HomeTabs.Navigator
			tabBarOptions={{
				activeTintColor: colors.d10,
				inactiveTintColor: colors.d0,
				labelStyle: {
					fontSize: 10,
					lineHeight: 12,
					paddingBottom: 10,
					fontFamily: 'SFProText-Semibold',
				},
				style: { height: 59 },
			}}
		>
			<HomeTabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name="home"
							size={24}
							color={focused ? colors.d10 : colors.d0}
						/>
					),
				}}
			/>
			<HomeTabs.Screen
				name="AddBook"
				component={AddBook}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name="plus"
							size={24}
							color={focused ? colors.d10 : colors.d0}
						/>
					),
					tabBarLabel: 'Add book',
				}}
			/>
			<HomeTabs.Screen
				name="Profile"
				component={AddBook}
				options={{
					tabBarIcon: ({ focused }) => (
						<Icon
							name="user"
							size={24}
							color={focused ? colors.d10 : colors.d0}
						/>
					),
				}}
			/>
		</HomeTabs.Navigator>
	);
};

const Stack = createStackNavigator();
const AppRoutes = () => {
	authInterceptor(store, api);

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Home" component={getHomeTabs} />
			<Stack.Screen
				name="Details"
				component={Details}
				options={{
					...TransitionPresets.ModalSlideFromBottomIOS,
				}}
			/>
		</Stack.Navigator>
	);
};

export default AppRoutes;
