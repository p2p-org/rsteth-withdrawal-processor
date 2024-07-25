import { logger } from './common/helpers/logger'
import { getPendingWithdrawers } from './mellow/reads/getPendingWithdrawers'
import { processAllTx } from './mellow/writes/processAllTx'
import { getPriorityAddresses } from './mellow/reads/getPriorityAddresses'

export async function processPriority() {
  logger.log('processPriority started')

  const pendingWithdrawers = await getPendingWithdrawers()

  logger.info(pendingWithdrawers.length, 'pendingWithdrawers found')

  if (pendingWithdrawers.length > 0) {
    const priorityAddresses = getPriorityAddresses()

    if (
      pendingWithdrawers.some((pw) => priorityAddresses.some(pr => pr.toLowerCase() === pw.toLowerCase()))
    ) {
      await processAllTx()
    }
  }

  logger.log('processPriority finished')
}
