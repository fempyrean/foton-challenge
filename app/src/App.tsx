import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import Book from './components/Book';

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
				<Book />
			</ThemeProvider>
		</NavigationContainer>
	);
};

export default App;
