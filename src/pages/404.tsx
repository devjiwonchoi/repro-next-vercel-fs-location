import { readJSON } from '@/lib'

export default async function FourOFour() {
  const fooOrbar = Math.random() > 0.5 ? 'foo' : 'bar'
  const json = await readJSON(fooOrbar)
  return <p>{json.value}</p>
}
