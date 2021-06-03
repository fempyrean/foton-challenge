import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import ReduxProvider from '@redux/provider';

import Router from './routes';

const theme = {
	colors: {
		bg: '#F2F2F2',
		buttonBg: '#FF6978',
		light20: '#FDFCFC',
		light30: '#FFF6E5',
		light40: '#FFFCF9',
		light90: '#FFFFFF',
		d0: '#BFBEBF',
		d10: '#313131',
		d20: '#54565A',
		d30: '#3F4043',
		d40: '#979797',
		d60: '#36383A',
		d90: '#000000',
		coral: '#FF6978',
		errorLight: '#EECEC9',
	},
};

const App = () => {
	return (
		<ReduxProvider>
			<NavigationContainer
				onReady={() => RNBootSplash.hide({ fade: true })}
			>
				<ThemeProvider theme={theme}>
					<StatusBar barStyle="dark-content" />
					<Router />
				</ThemeProvider>
			</NavigationContainer>
		</ReduxProvider>
	);
};

export default App;
