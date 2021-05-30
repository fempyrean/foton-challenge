import React from 'react';

import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';

import { useAppSelector } from '@redux/hooks';
import { selectUser } from '@features/auth/auth.slice';

const Routes = () => {
	const user = useAppSelector(selectUser);

	return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
