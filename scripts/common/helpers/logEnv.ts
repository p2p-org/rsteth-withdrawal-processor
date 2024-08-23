import { logger } from './logger'

export function logEnv() {
  logger.info('RPC_URL', process.env.RPC_URL)
  logger.info('MAX_FEE_PER_GAS_IN_GWEI', process.env.MAX_FEE_PER_GAS_IN_GWEI)
  logger.info(
    'MAX_PIORITY_FEE_PER_GAS_IN_GWEI',
    process.env.MAX_PIORITY_FEE_PER_GAS_IN_GWEI,
  )
  logger.info('PORT', process.env.PORT)
  logger.info('KEYSTORE_FILE_PATH', process.env.KEYSTORE_FILE_PATH)
  logger.info('KEYSTORE_FILE_PASSWORD exists', !!process.env.KEYSTORE_FILE_PASSWORD?.length)
}
