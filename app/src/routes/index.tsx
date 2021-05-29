import React from 'react';

import AuthRoutes from './Auth.routes';
import Home from '@pages/Home';

const user = false;

const Routes = () => {
	return user ? <Home /> : <AuthRoutes />;
};

export default Routes;
