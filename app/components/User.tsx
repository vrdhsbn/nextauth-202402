'use client'

import { Session } from 'next-auth'
import { useEffect, useState } from 'react'
import { signOutFunc } from '../lib/signOutFunc'
import styles from './style.module.css'

export const User = () => {
  // App Router では useSession は必要無いかもと公式ドキュメントに書かれているが…？
  // https://authjs.dev/reference/nextjs/react#usesession

  // これがヒントになるか？
  // https://authjs.dev/guides/upgrade-to-v5?authentication-method=client-component#authentication-methods
  // Client-side: Instead of using these APIs, you can make a fetch request to the /api/auth/providers and /api/auth/csrf endpoints respectively.
  // providers じゃなくて session をフェッチすれば取得できそう

  const [session, setSession] = useState<Session | null>(null)

  // 課題
  // ここでuseEffectでセッションを取得しようとすると表示がちらつくな…
  useEffect(() => {
    const fetchSession = async () => {
      const res = await fetch('/api/auth/session')
      const sessionData = await res.json()
      setSession(sessionData)
    }

    fetchSession()
  }, [])

  return (
    <div>
      {session ? (
        <form action={signOutFunc}>
          <button type='submit' className={styles.button}>
            ログアウト
          </button>
        </form>
      ) : (
        <form action='/login'>
          <button type='submit' className={styles.button}>
            ログイン
          </button>
        </form>
      )}
    </div>
  )
}
