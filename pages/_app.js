import '../styles/globals.css';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: {
			link: '#6622aa',
			mycolor: '#6622aa',
		},
	},
});

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			link: '#9750dd',
			mycolor: '#6622aa',
		},
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<NextThemesProvider
			defaultTheme='system'
			attribute='class'
			value={{
				light: lightTheme.className,
				dark: darkTheme.className,
			}}
		>
			<NextUIProvider theme={lightTheme}>
				<Component {...pageProps} />
			</NextUIProvider>
		</NextThemesProvider>
	);
}

export default MyApp;
