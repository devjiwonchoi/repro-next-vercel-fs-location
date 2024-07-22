import { readJSON } from '@/lib'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const json = await readJSON()
  return (
    <html>
      <body>
        <h1>{json.foo}</h1>
        {children}
      </body>
    </html>
  )
}
