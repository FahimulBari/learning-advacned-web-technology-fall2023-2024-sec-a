export const metadata = {
  title: 'First Next App',
  description: 'Fahimul Bari',
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
