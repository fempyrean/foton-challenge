import { UserStatus } from './auth.enums';

export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
}

export interface AuthState {
	status: UserStatus;
	user?: User;
	token?: string;
	message?: string;
}
