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

const HomeStack = createStackNavigator();
const getHomeStack = () => {
	return (
		<HomeStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<HomeStack.Screen name="Search" component={Home} />
			<HomeStack.Screen
				name="Details"
				component={Details}
				options={{ ...TransitionPresets.RevealFromBottomAndroid }}
			/>
		</HomeStack.Navigator>
	);
};

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
	const { colors } = useTheme();

	return (
		<Tab.Navigator
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
			<Tab.Screen
				name="Home"
				component={getHomeStack}
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
			<Tab.Screen
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
			<Tab.Screen
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
		</Tab.Navigator>
	);
};

export default AppRoutes;
