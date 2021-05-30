import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			bg: string;
			light20: string;
			d10: string;
			d20: string;
			d90: string;
			errorLight: string;
			coral: string;
		};
	}
}
