import { readJSON } from '@/app/lib'

// posts will be populated at build time by getStaticProps()
export default function Blog({ fooOrbar }: any) {
  return (
    <div>
      <h1>Dynamic JSON value: {fooOrbar}</h1>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const fooOrbar = Math.random() > 0.5 ? 'foo' : 'bar'
  const json = await readJSON(fooOrbar)
  return {
    props: {
      fooOrbar: json.value,
    },
  }
}
