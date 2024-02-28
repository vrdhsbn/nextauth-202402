'use client'

import { authenticate } from '@/app/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { githubLogin } from '../lib/githubLogin'

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, true)

  return (
    <>
      <div style={{ marginTop: '24px' }}>
        <h2>IDとパスワードでログインする</h2>
        <form action={formAction} style={{ marginTop: '16px' }}>
          <label>
            <span style={{ marginRight: '8px' }}>メールアドレス:</span>
            <input type='email' name='email' />
          </label>
          <br />
          <label>
            <span style={{ marginRight: '8px' }}>パスワード:</span>
            <input type='password' name='password' />
          </label>
          {!state && <div>メールアドレスかパスワードが違います。</div>}
          <br />
          <SubmitButton />
        </form>
      </div>

      <div style={{ marginTop: '48px' }}>
        <h2>GitHubアカウントでログインする</h2>
        <br />
        <form action={githubLogin}>
          <button type='submit'>Sign in with GitHub</button>
        </form>
      </div>
    </>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button type='submit' aria-disabled={pending}>
      {pending ? 'ログイン中' : 'ログインする'}
    </button>
  )
}
