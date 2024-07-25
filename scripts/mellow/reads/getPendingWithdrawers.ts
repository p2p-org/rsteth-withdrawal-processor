import { logger } from '../../common/helpers/logger'
import { rstETHVaultContract } from '../contracts/rstETHVaultContract'

export async function getPendingWithdrawers() {
  logger.info('getPendingWithdrawers started')

  const pendingWithdrawers =
    (await rstETHVaultContract.read.pendingWithdrawers()) as string[]

  logger.info('getPendingWithdrawers finished')

  return pendingWithdrawers
}
