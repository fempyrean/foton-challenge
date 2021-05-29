import { User } from '../auth.interfaces';

export interface UserCredentials {
	email: string;
	password: string;
}

export interface LoginResponse {
	token: string;
	user: User;
}

export interface LoginReject {
	rejectValue: {
		message: string;
	};
}
