import { getContract } from 'viem'
import { logger } from '../../common/helpers/logger'
import { rstETHVaultContractAddresss, VaultAbi } from '../contracts/rstETHVaultContract'
import { getWalletClient } from '../../common/helpers/clients'

export async function getPendingWithdrawers() {
  logger.info('getPendingWithdrawers started')

  const { publicClient, walletClient } = await getWalletClient()

  const rstETHVaultContract = getContract({
    address: rstETHVaultContractAddresss,
    abi: VaultAbi,
    client: {
      public: publicClient,
      wallet: walletClient,
    },
  })

  const pendingWithdrawers =
    (await rstETHVaultContract.read.pendingWithdrawers()) as string[]

  logger.info('getPendingWithdrawers finished')

  return pendingWithdrawers
}
