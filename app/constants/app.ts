import { env } from './env'

export const IS_PRO = env.VITE_APP_MODE === 'pro'

export const IS_DEV = env.VITE_APP_MODE === 'dev'

export const IS_LOCAL = import.meta.env.DEV

export const VERSION = '0.0.2'
