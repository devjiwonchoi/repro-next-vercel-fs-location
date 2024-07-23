import { readFile } from 'fs/promises'
import { join } from 'path'

export async function readJSON(slug: string) {
  const json = await readFile(join(process.cwd(), `json/${slug}.json`), 'utf-8')
  return JSON.parse(json)
}
