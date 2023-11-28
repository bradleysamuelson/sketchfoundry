import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
import './styles.scss';

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
