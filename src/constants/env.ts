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
  },

  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
})
