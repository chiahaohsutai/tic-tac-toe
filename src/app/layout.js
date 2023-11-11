import '../styles/globals.css'

export const metadata = {
  title: 'TicTacToe',
  description: 'Play tic-tac-toe.',
  icons: {
    icon: '../../icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
