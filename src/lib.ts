import { readFile } from 'fs/promises'
import { join } from 'path'

export async function readJSON(fooOrbar: string) {
  const json = await readFile(
    join(process.cwd(), `json/${fooOrbar}.json`),
    'utf-8'
  )
  return JSON.parse(json)
}
