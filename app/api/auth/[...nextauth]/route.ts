import { handlers } from '@/app/lib/auth'

export const { GET, POST } = handlers
export const runtime = 'edge'

// このAPIで以下のリクエストが受けられるようになる
// GET /api/auth/signin
// POST /api/auth/signin/:provider
// GET/POST /api/auth/callback/:provider
// GET /api/auth/signout
// POST /api/auth/signout
// GET /api/auth/session
// GET /api/auth/csrf
// GET /api/auth/providers
