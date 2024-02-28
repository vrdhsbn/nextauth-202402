'use server'

import { signOut } from './auth'

export const signOutFunc = async () => {
  await signOut()
}
