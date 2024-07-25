import 'dotenv/config'
import { logger } from './scripts/common/helpers/logger'
import { getPendingWithdrawers } from './scripts/mellow/reads/getPendingWithdrawers'

async function main() {
  logger.info('03-get-pending-withdrawers started')

  const pendingWithdrawers = await getPendingWithdrawers()
  logger.info(pendingWithdrawers)

  logger.info('03-get-pending-withdrawers finished')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
