import { readFile } from 'fs/promises'
import { join } from 'path'

export async function readJSON() {
  const fooOrbar = Math.random() > 0.5 ? 'foo' : 'bar'
  const json = await readFile(
    join(process.cwd(), `json/${fooOrbar}.json`),
    'utf-8'
  )
  return JSON.parse(json)
}
