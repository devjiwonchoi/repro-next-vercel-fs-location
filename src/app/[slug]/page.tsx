import { readJSON } from '@/lib'

export default async function Home({ params: { slug } }: any) {
  const json = await readJSON(slug)
  return <p>{json.value}</p>
}
