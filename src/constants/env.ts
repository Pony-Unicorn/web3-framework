import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  clientPrefix: 'NEXT_PUBLIC_',

  client: {
    NEXT_PUBLIC_APP_MODE: z.enum(['pro', 'dev']).default('dev'),
    NEXT_PUBLIC_USE_TESTNETS: z
      .enum(['true', 'false'])
      .default(process.env.NEXT_PUBLIC_APP_MODE === 'pro' ? 'false' : 'true')
      .transform((val) => val === 'true'),
    NEXT_PUBLIC_PROJECT_ID: z
      .string()
      .default('b56e18d47c72ab683b10814fe9495694'), // this is a public projectId only to use on localhost
  },

  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
})
