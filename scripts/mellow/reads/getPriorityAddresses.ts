import { logger } from '../../common/helpers/logger'
import process from 'process'

export function getPriorityAddresses() {
  logger.log('getPriorityAddresses started')

  if (!process.env.PRIORITY_ADDRESSES) {
    throw new Error('No PRIORITY_ADDRESSES in ENV')
  }

  const addresses = process.env.PRIORITY_ADDRESSES?.replace(
    /[\[\]]/g,
    '',
  ).split(',')

  logger.log('getPriorityAddresses finished')

  return addresses
}
