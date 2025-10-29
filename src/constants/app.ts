import { env } from './env'

export const IS_PRO = env.NEXT_PUBLIC_APP_MODE === 'pro'

export const IS_DEV = env.NEXT_PUBLIC_APP_MODE === 'dev'

export const VERSION = '0.1.1'
