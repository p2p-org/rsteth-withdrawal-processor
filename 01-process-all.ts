import 'dotenv/config'
import { logger } from './scripts/common/helpers/logger'
import { processAll } from './scripts/processAll'

async function main() {
  logger.info('01-process-all started')

  await processAll()

  logger.info('01-process-all finished')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
