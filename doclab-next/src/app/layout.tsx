import type { Metadata } from 'next'
import { Oswald, Rubik } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['500', '700'],
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Doclab - home',
  description: 'This is a medical html template made by codewithsadee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${rubik.variable} ${oswald.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
