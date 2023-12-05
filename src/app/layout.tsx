import type { Metadata } from 'next'
// import './globals.css'
import './styles.scss';
import { Analytics } from '@vercel/analytics/react';


// const inter = Inter({ subsets: ['latin'] });
// const rubik = Rubik({ subsets: ['latin'] });


export const metadata: Metadata = {
	title: 'Sketch Foundry | Custom Illustration',
	description: 'Sketch Foundry offers subscription based custom illustrations',
	openGraph: {
		title: 'Sketch Foundry | Custom Illustration',
		description: 'Sketch Foundry offers subscription based custom illustrations',
		url: 'https://www.sketchfoundry.co/',
		images: [
		  {
			url: 'https://www.sketchfoundry.co/sf-meta-img.jpg',
			width: 1200,
			height: 628,
		  },
		],
		locale: 'en_US',
		type: 'website',
	  },
	  twitter: {
		card: 'summary_large_image',
		title: 'Sketch Foundry | Custom Illustration',
		description: 'Sketch Foundry offers subscription based custom illustrations',
		creator: '@cartoonbradley',
		images: ['https://www.sketchfoundry.co/sf-meta-img.jpg'],
	  },
	  icons: {
		icon: 'https://www.sketchfoundry.co/logo512.png',
		apple: 'https://www.sketchfoundry.co/logo192.png',
	  },
}

export default function RootLayout({
  	children,
}: {
  	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<body>{children}</body>
		<Analytics />
	</html>
  )
}
