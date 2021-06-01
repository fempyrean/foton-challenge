import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Scrollable, Button } from './styles';
import Input from '@components/Input';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { BookStatus } from '@features/book/book.enums';
import { AddBookDTO } from '@features/book/book.interfaces';
import { addBook } from '@features/book/book.thunk';

const schema = z.object({
	name: z.string().min(1),
	author: z.string().min(1),
	cover: z.string().url().min(1),
	description: z.string().min(50),
});

const AddBook = () => {
	const navigation = useNavigation();
	const dispatch = useAppDispatch();
	const { status } = useAppSelector(({ books }) => books);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(schema) });

	const onSubmit = async (data: AddBookDTO) => {
		await dispatch(addBook(data));
		navigation.goBack();
	};

	return (
		<Container>
			<Scrollable>
				<Title>Add a new book</Title>
				<Input
					label="Name"
					name="name"
					control={control}
					error={errors.name}
					style={{ marginBottom: 35 }}
				/>
				<Input
					label="Author"
					name="author"
					control={control}
					error={errors.author}
					style={{ marginBottom: 35 }}
				/>
				<Input
					label="Book Cover URL"
					name="cover"
					control={control}
					error={errors.cover}
					style={{ marginBottom: 35 }}
				/>
				<Input
					label="Description"
					name="description"
					control={control}
					error={errors.description}
					multiline={true}
					numberOfLines={12}
					style={{
						textAlignVertical: 'top',
						height: 228,
						maxHeight: 228,
					}}
				/>
				<Button
					onPress={handleSubmit(onSubmit)}
					loading={status === BookStatus.FETCHING}
				/>
			</Scrollable>
		</Container>
	);
};

export default AddBook;
