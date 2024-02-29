'use client'

import Link from 'next/link'
import { User } from './User'

export const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        borderBottom: 'solid 1px #fff',
      }}
    >
      <h1>NextAuth Demo</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px',
            listStyleType: 'none',
            padding: '16px 24px',
            borderRight: 'solid 1px #555',
          }}
        >
          <li>
            <Link href='/'>ホーム</Link>
          </li>
          <li>
            <Link href='/dashboard'>ダッシュボード</Link>
          </li>
        </ul>
        <div style={{ width: '120px' }}>
          <User />
        </div>
      </div>
    </header>
  )
}
