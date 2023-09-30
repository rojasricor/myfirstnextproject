import Navbar from 'src/components/Navbar'
import { Roboto } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Richxrx page',
  description: 'My richxrx page bootstrapped with NextJS',
  keywords: ['store', 'web', 'online'],
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  styles: ['italic', 'normal'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
