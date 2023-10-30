import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google clone Next js 14',
  description: 'Google Clone by create next js 14',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
       
      <body className={inter.className}>{children}</body>
    </html>
  )
}
