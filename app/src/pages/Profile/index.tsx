import React from 'react';

import { Container, Text, SignOut } from './styles';

const Profile = () => {
	return (
		<Container>
			<Text>Hi there,{'\n'}</Text>
			<Text>sorry but there's not much on this page yet.</Text>
			<Text>
				You can still sign out, tho, we won't keep you hostage of this
				awesome application
			</Text>

			<SignOut />
		</Container>
	);
};

export default Profile;
