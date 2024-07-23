// import { readJSON } from '@/lib'

// export const dynamic = 'force-dynamic'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // const fooOrbar = Math.random() > 0.5 ? 'foo' : 'bar'
  // const json = await readJSON(fooOrbar)
  return (
    <html>
      <body>
        {/* <h1>{json.value}</h1> */}
        {children}
      </body>
    </html>
  )
}
