import { readJSON } from './lib'

export default async function Home() {
  const json = await readJSON()
  return <p>{json.value}</p>
}
