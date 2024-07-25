import { logger } from './common/helpers/logger'
import { getPendingWithdrawers } from './mellow/reads/getPendingWithdrawers'
import { processAllTx } from './mellow/writes/processAllTx'

export async function processAll() {
  logger.log('processAll started')

  const pendingWithdrawers = await getPendingWithdrawers()

  logger.info(pendingWithdrawers.length, 'pendingWithdrawers found')

  if (pendingWithdrawers.length > 0) {
    await processAllTx()
  }

  logger.log('processAll finished')
}
