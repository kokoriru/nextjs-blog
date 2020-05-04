import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts'

export default Post() {
  return (
    <Layout>
      <Head>
        <title>Post</title>
      </Head>
      <h1>Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
