import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404エラー</title>
      </Head>
      <div>
        <h1>404エラー</h1>
        <h2>お探しのページが見つかりませんでした</h2>
        <p>
          ページが一時的にアクセスできない状況にあるか
          移動もしくは削除された可能性があります。
          下記のリンクよりご覧になりたいページをお探しください。
        </p>
      </div>
      <Link href='/'><a>TOPページ</a></Link>
    </>
  )
}
