import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../redux/root-reducer';
import { UserStatus } from './auth.enums';
import { AuthState } from './auth.interfaces';
import { LoginReject } from './login/login.interfaces';

import { userLogin } from './login/login.thunk';

const initialState: AuthState = {
	status: UserStatus.IDLE,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		unsetUser: (state) => {
			state = initialState;
		},
		unsetUserWithMessage: (state, { payload }) => {
			return { ...initialState, message: payload };
		},
		setMessage: (state, { payload }) => {
			return { ...state, payload };
		},
		unsetMessage: (state) => {
			state.message = undefined;
		},
		setToken: (state, { payload }) => {
			state.token = payload;
		},
	},
	extraReducers: (builder) =>
		builder
			.addCase(userLogin.fulfilled, (state, { payload }) => {
				return { ...payload, status: UserStatus.SUCCESS };
			})
			.addCase(userLogin.pending, (state) => {
				state.status = UserStatus.FETCHING;
			})
			.addCase(userLogin.rejected, (state, { payload }) => {
				const TPayload = payload as LoginReject;
				return { ...TPayload, status: UserStatus.ERROR };
			}),
});

export const {
	unsetUser,
	unsetUserWithMessage,
	setMessage,
	unsetMessage,
	setToken,
} = authSlice.actions;

export const selectUser = ({ auth }: RootState) => auth.user;

export default authSlice.reducer;
