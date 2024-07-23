import { readFile } from 'fs/promises'
import { join } from 'path'

export async function readJSON() {
  // random api call
  const random = await fetch(
    'https://next-data-api-endpoint.vercel.app/api/random'
  )
  const randomNum = await random.json()
  const fooOrbar = randomNum > 0.5 ? 'foo' : 'bar'
  const json = await readFile(
    join(process.cwd(), `json/${fooOrbar}.json`),
    'utf-8'
  )
  return JSON.parse(json)
}
