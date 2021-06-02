import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignUpData } from './signup.interfaces';
import signup from '@services/user/signup';

export const userSignUp = createAsyncThunk(
	'signup',
	async (signUpData: SignUpData, thunkAPI) => {
		try {
			const { data } = await signup(signUpData);
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
