import AppNavbar from "./components/AppNavbar"

export const metadata = {
  title: 'Everdeck Library',
  description: 'A library of games playable by the Everdeck',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body>
        <AppNavbar />
        {children}
      </body>
    </html>
  )
}
