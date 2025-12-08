import { env } from './env'

export const IS_PRO = env.VITE_APP_MODE === 'pro'

export const IS_DEV = env.VITE_APP_MODE === 'dev'

export const VERSION = '0.0.1'
