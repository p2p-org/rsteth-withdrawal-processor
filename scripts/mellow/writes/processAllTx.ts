import { logger } from '../../common/helpers/logger'
import { sendTx } from '../../common/helpers/sendTx'
import {
  DefaultBondStrategyAbi,
  DefaultBondStrategyContractAddresss,
} from '../contracts/DefaultBondStrategyContract'

export async function processAllTx() {
  logger.log('processAllTx started')

  const txHash = await sendTx(
    DefaultBondStrategyContractAddresss,
    DefaultBondStrategyAbi,
    'processAll',
    [],
  )

  logger.info('processAll tx finished', txHash)
}
