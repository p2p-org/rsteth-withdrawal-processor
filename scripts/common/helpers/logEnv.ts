import { logger } from './logger'

export function logEnv() {
  logger.info('RPC_URL', process.env.RPC_URL)
  logger.info('MAX_FEE_PER_GAS_IN_GWEI', process.env.MAX_FEE_PER_GAS_IN_GWEI)
  logger.info(
    'MAX_PIORITY_FEE_PER_GAS_IN_GWEI',
    process.env.MAX_PIORITY_FEE_PER_GAS_IN_GWEI,
  )
  logger.info('PORT', process.env.PORT)
  logger.info('PRIVATE_KEY length', process.env.PRIVATE_KEY?.length)
}
