import { TextInputProps as TextInputsPropsNative } from 'react-native';
import { Control, RegisterOptions } from 'react-hook-form';

export interface TextInputProps extends Omit<TextInputsPropsNative, 'style'> {
	control: Control;
	name: string;
	label: string;
	rules?: RegisterOptions;
	style?: any;
	error?: boolean;
}
