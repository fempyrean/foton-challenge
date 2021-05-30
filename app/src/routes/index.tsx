import React from 'react';

import AuthRoutes from './Auth.routes';
import Home from '@pages/Home';

import { useAppSelector } from '@redux/hooks';
import { selectUser } from '@features/auth/auth.slice';

const Routes = () => {
	const user = useAppSelector(selectUser);

	return user ? <Home /> : <AuthRoutes />;
};

export default Routes;
