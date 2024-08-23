import 'dotenv/config'
import { logger } from './scripts/common/helpers/logger'
import { Wallet } from '@ethereumjs/wallet'
import * as fs from 'fs'
import { getWalletClient } from './scripts/common/helpers/clients'
import { sleep } from './scripts/common/helpers/sleep'

async function main() {
  logger.info('97-test started')

  const { walletClient } = await getWalletClient()

  console.log(walletClient.account?.address)

  logger.info('97-test finished')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
