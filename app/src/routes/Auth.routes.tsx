import React from 'react';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import Login from '@pages/Login';

const AuthNavigation = createStackNavigator();

const transitionOptions = {
	...TransitionPresets.SlideFromRightIOS,
	gestureEnabled: false,
};

const AuthRoutes = () => {
	return (
		<AuthNavigation.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName={'Login'}
		>
			<AuthNavigation.Screen
				name="Login"
				component={Login}
				options={transitionOptions}
			/>
		</AuthNavigation.Navigator>
	);
};

export default AuthRoutes;
