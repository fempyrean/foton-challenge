/**
 *
 * @param pos
 * @description
 * If anyone ends up here, be aware that this is a very tricky way
 * of calculating the correct alignment for each item of the flat list
 * based on whether they're the first, second or third item of the row.
 *
 * This is necessary so the books be aligned with the rest of the content
 * like in the figma design.
 *
 * Gambiarration but it works ¯\_(ツ)_/¯
 */
export const getItemAlignment = (pos: number, length: number) => {
	const alignments = ['flex-start', 'center', 'flex-end'];
	let alignment = 'flex-start';

	/** Edgecases */
	if (length <= 2) {
		return 'center';
	}

	for (let i = 0; i <= pos; i++) {
		if (i === 0) {
			alignment = 'flex-start';
		} else {
			let tmp = alignments.indexOf(alignment);

			alignment = alignments[tmp + 1] ?? alignments[0];
		}
	}

	return alignment;
};
