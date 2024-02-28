import { auth } from './lib/auth'

export default async function Home() {
  const session = await auth()

  return (
    <div>
      <h1>Home</h1>
      <p>ようこそ、{session ? session.user?.email : 'ゲスト'}さん</p>
    </div>
  )
}
