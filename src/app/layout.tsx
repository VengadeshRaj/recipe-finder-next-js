import "./globals.css";
export const metadata = {
  title: 'Receipe Finder',
  description: 'Find your favourite food receipe with us.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
