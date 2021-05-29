import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import Router from './routes';

const theme = {
	colors: {
		bg: '#F2F2F2',
		d10: '#313131',
	},
};

const App = () => {
	return (
		<NavigationContainer>
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</NavigationContainer>
	);
};

export default App;
