import {
	LoginResponse,
	UserCredentials,
} from '@features/auth/login/login.interfaces';
import api from '@services/api';
import { AxiosResponse } from 'axios';

const login = {
	withCredentials: async (
		credentials: UserCredentials,
	): Promise<AxiosResponse<LoginResponse>> => {
		return await api.post('/auth/login', credentials);
	},
};

export default login;
