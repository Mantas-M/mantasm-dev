import Navbar from './NavBar'
import './globals.css'

export const metadata = {
  title: 'Mantas-M',
  description: 'Personal website of Mantas Miklasevicius',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}
