import type { Metadata } from 'next'
import Head from 'next/head'
// import { Inter } from 'next/font/google'
// import { Rubik } from 'next/font/google'
// import './globals.css'
import './styles.scss';

// const inter = Inter({ subsets: ['latin'] });
// const rubik = Rubik({ subsets: ['latin'] });


export const metadata: Metadata = {
	title: 'Sketch Foundry | Custom Illustration',
	description: 'Sketch Foundry offers subscription based custom illustrations.',
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<Head>
			{/* Primary Meta Tags */}
			<title>Sketch Foundry | Custom Illustration</title>
			<meta name="title" content="Sketch Foundry | Custom Illustration" />
			<meta name="description" content="Sketch Foundry offers subscription based custom illustrations." />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.sketchfoundry.co/" />
			<meta property="og:title" content="Sketch Foundry | Custom Illustration" />
			<meta property="og:description" content="Sketch Foundry offers subscription based custom illustrations." />
			<meta property="og:image" content="/sf-meta-img" />

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://www.sketchfoundry.co/" />
			<meta property="twitter:title" content="Sketch Foundry | Custom Illustration" />
			<meta property="twitter:description" content="Sketch Foundry offers subscription based custom illustrations." />
			<meta property="twitter:image" content="/sf-meta-img" />

		</Head>
		<body>{children}</body>
	</html>
  )
}
