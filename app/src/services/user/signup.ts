import {
	SignUpData,
	SignUpResponse,
} from '@features/auth/signup/signup.interfaces';
import api from '@services/api';
import { AxiosResponse } from 'axios';

const signup = async (
	data: SignUpData,
): Promise<AxiosResponse<SignUpResponse>> => {
	return await api.post('/users', data);
};

export default signup;
