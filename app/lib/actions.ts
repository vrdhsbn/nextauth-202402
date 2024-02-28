'use server'

import { signIn } from '@/app/lib/auth'

// biome-ignore lint/correctness/noUnusedVariables: prevStateはここでは使わないが、useFormStateに渡す際にこれが必要
export async function authenticate(prevState: boolean, formData: FormData) {
  console.log('認証中…')
  try {
    // Credentialsプロバイダを使うので、第1引数には'credentials'を指定する
    // Object.fromEntries() はキーと値の組のリストをオブジェクトに変換する
    await signIn('credentials', Object.fromEntries(formData))
    return true
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      console.log('認証失敗')
      return false
    }
    throw error
  }
}
