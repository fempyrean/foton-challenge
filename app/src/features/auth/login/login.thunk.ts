import { createAsyncThunk } from '@reduxjs/toolkit';
import login from '@services/user/login';
import { UserCredentials } from './login.interfaces';

export const userLogin = createAsyncThunk(
	'user/login',
	async (credentials: UserCredentials, thunkAPI) => {
		try {
			const { data } = await login.withCredentials(credentials);
			return data;
		} catch (err) {
			if (err?.response?.status === 401) {
				return thunkAPI.rejectWithValue({
					message:
						'Username/Password combination is invalid. Please try again.',
				});
			}
			return thunkAPI.rejectWithValue({
				message: 'Unknown error occurred. Please try again',
			});
		}
	},
);
