export interface SignUpData {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface SignUpResponse extends SignUpData {
	id: string;
	createdAt: string;
	updatedAt: string;
}
