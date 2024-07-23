import { readJSON } from '../lib'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const json = await readJSON()
  return <p>{json.value}</p>
}
