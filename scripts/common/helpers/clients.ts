import { holesky, mainnet } from 'viem/chains'
import { createPublicClient, createWalletClient, http, PrivateKeyAccount, PublicClient, WalletClient } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import process from 'process'
import fs from 'fs'
import { Wallet } from '@ethereumjs/wallet'

let isHolesky: boolean
let account: PrivateKeyAccount
let walletClient: WalletClient
let publicClient: PublicClient

export async function getWalletClient() {
  if (!process.env.RPC_URL) {
    throw new Error('No RPC_URL in ENV')
  }

  isHolesky = process.env.RPC_URL.includes('holesky')

  const chain = isHolesky
    ? holesky
    : process.env.RPC_URL.includes('mainnet')
      ? mainnet
      : null

  if (!chain) {
    throw new Error('Chain is not clear from RPC_URL. Use Infura')
  }

  if (!process.env.KEYSTORE_FILE_PATH) {
    throw new Error('No KEYSTORE_FILE_PATH in ENV')
  }
  if (!process.env.KEYSTORE_FILE_PASSWORD) {
    throw new Error('No KEYSTORE_FILE_PASSWORD in ENV')
  }

  publicClient = createPublicClient({
    chain,
    transport: http(process.env.RPC_URL),
  })

  const keystore = fs.readFileSync(process.env.KEYSTORE_FILE_PATH, 'utf8')
  const wallet = await Wallet.fromV3(keystore, process.env.KEYSTORE_FILE_PASSWORD)
  const key = wallet.getPrivateKeyString()
  account = privateKeyToAccount(key)

  walletClient = createWalletClient({
    chain,
    transport: http(process.env.RPC_URL),
    account,
  })

  return {
    isHolesky, account, walletClient, publicClient
  }
}


