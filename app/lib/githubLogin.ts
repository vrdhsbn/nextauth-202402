'use server'

import { signIn } from '@/app/lib/auth'

export const githubLogin = async () => {
  try {
    await signIn('github')
    return true
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      console.log('認証失敗')
      return false
    }
    throw error
  }
}
