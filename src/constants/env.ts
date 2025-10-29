import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  clientPrefix: 'NEXT_PUBLIC_',

  client: {
    NEXT_PUBLIC_APP_MODE: z.enum(['pro', 'dev']).default('dev'),
    NEXT_PUBLIC_PROJECT_ID: z.string().min(32),
  },

  runtimeEnvStrict: {
    NEXT_PUBLIC_APP_MODE: process.env.NEXT_PUBLIC_APP_MODE,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
  },

  emptyStringAsUndefined: true,
})
