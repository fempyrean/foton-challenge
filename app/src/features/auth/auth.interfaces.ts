import { UserStatus } from './auth.enums';

export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string | null;
}

export interface AuthState {
	status: UserStatus;
	user?: User;
	token?: string;
	message?: string;
}
