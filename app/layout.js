import React from "react"
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from "./components/Navbar";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: 'Travel - Explore the World',
  description: 'Learn new things by travelling the world. Discover amazing destinations and create unforgettable memories.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}) {
  return <html lang="en">
    <body className={`font-sans antialiased`}>
      <Navbar />
      {children}
    </body>
  </html>
}
