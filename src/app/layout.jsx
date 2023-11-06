import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  
  title: 'Google clone Next js 14',
  description: 'Google Clone by create next js 14',


}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.svg' />
      </head>
      <body className="relative min-h-screen">
        {children}
        <Footer/>
        </body>
    
    </html>
  )
}
