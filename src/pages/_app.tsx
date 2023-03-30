import type { AppProps } from 'next/app'
import Head from 'next/head'

import { UserProvider } from '@/contexts/UserContexts'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<Head>
				<title>Tela de Login</title>
				<meta name='description' content='App Board usando Next.js com TypeScript' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='UTF-8' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Component {...pageProps} />
		</UserProvider>
	)
}
