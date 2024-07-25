import 'dotenv/config'
import { logger } from './scripts/common/helpers/logger'
import { getPendingWithdrawers } from './scripts/mellow/reads/getPendingWithdrawers'
import { getPriorityAddresses } from './scripts/mellow/reads/getPriorityAddresses'

async function main() {
  logger.info('97-test started')

  // const pendingWithdrawers = await getPendingWithdrawers()

  const priorityAddresses = getPriorityAddresses()

  logger.info('97-test finished')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
