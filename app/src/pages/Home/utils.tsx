export const getTitleFont = (variant = 'normal') => {
	return variant === 'bold' ? 'SFProText-Heavy' : 'SFProText-Medium';
};

export const getTitleColor = (variant = 'normal', theme: any) => {
	return variant === 'bold' ? theme.colors.coral : theme.colors.d20;
};
