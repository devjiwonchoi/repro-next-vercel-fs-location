import { readFile } from 'fs/promises'
import { join } from 'path'

export async function readJSON() {
  const json = await readFile(join(process.cwd(), 'json/data.json'), 'utf-8')
  return JSON.parse(json)
}
