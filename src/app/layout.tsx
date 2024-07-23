import { readJSON } from '../lib'

export const dynamic = 'force-dynamic'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const json = await readJSON()
  return (
    <html>
      <p>{json.value}</p>
      <body>{children}</body>
    </html>
  )
}
