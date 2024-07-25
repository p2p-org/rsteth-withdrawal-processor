import 'dotenv/config'
import { logger } from './scripts/common/helpers/logger'
import { processPriority } from './scripts/processPriority'

async function main() {
  logger.info('02-process-priority started')

  await processPriority()

  logger.info('02-process-priority finished')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
