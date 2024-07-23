import { readJSON } from '@/app/lib'

// posts will be populated at build time by getStaticProps()
export default function Blog({ fooOrbar }: any) {
  return (
    <div>
      <h1>Dynamic JSON value: {fooOrbar}</h1>
    </div>
  )
}

export async function getStaticProps() {
  const json = await readJSON()
  return {
    props: {
      fooOrbar: json.value,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}
