import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import github from 'next-auth/providers/github'

export const authConfig: NextAuthConfig = {
  // providers の中に利用する認証方法（Credentials, Google, Twitter, etc.）を追加していく
  providers: [
    Credentials({
      async authorize(credentials) {
        await new Promise(resolve => setTimeout(resolve, 3000))

        // テスト用認証情報
        // 本来ならDBから認証情報を取ってきて照合する
        const email = 'test@example.com'
        const password = '1234'

        // credentials情報がマッチすればUserオブジェクトを返し、これがJWTとして保存される
        // https://authjs.dev/guides/providers/credentials
        // If you return an object it will be persisted to the JSON Web Token and the user will be signed in
        return credentials.email === email && credentials.password === password
          ? { id: 'userId', email }
          : null
      },
    }),
    // GitHub認証のクライアントIDやシークレットキーは.envに書いておけば勝手に使ってくれる
    github,
  ],
  // 認証が必要な場合と、ログアウト時にログインページに遷移させる
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
  // ログイン状態によってダッシュボードにリダイレクトするコールバック
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard')
      // 管理画面へのアクセス
      if (isOnDashboard) {
        if (isLoggedIn) return true
        return false
      }
      // ログインしていれば管理画面にリダイレクト
      if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true
    },
  },
}
