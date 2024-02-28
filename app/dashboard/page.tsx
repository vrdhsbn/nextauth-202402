import { auth } from '../lib/auth'

export default async function Dashboard() {
  const session = await auth()

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        ここは{session ? session.user?.email : 'ゲスト'}さんのダッシュボードです
      </p>
    </div>
  )
}
