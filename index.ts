import 'dotenv/config'
import express, { Request, Response } from 'express'
import { logger } from './scripts/common/helpers/logger'
import { logEnv } from './scripts/common/helpers/logEnv'
import { processAll } from './scripts/processAll'
import { processPriority } from './scripts/processPriority'

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('rsteth-withdrawal-processor server')
})

app.get('/01-process-all', async (req: Request, res: Response) => {
  logger.info('01-process-all started')
  res.send('01-process-all started at ' + new Date().toISOString())
  logEnv()
  await processAll()
  logger.info('01-process-all finished')
})

app.get('/02-process-priority', async (req: Request, res: Response) => {
  logger.info('02-process-priority started')
  res.send('02-process-priority started at ' + new Date().toISOString())
  logEnv()
  await processPriority()
  logger.info('02-process-priority finished')
})

app.listen(process.env.PORT, () =>
  logger.info('Server started on port', process.env.PORT),
)
