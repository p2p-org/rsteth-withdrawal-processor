# rsteth-withdrawal-processor

## HTTP service

Start the server
```shell
pnpm start
```

##### Call `process` for all withdrawers
`GET http://localhost:3000/01-process-all`

##### Call `process` for select few withdrawers
`GET http://localhost:3000/02-process-priority`

##### Get all pending withdrawers without calling `process`
`GET http://localhost:3000/03-get-pending-withdrawers`

## Local usage

##### Call `process` for all withdrawers
`pnpm run 01-process-all`

##### Call `process` for select few withdrawers
`pnpm run 02-process-priority`

##### Get all pending withdrawers without calling `process`
`pnpm run 03-get-pending-withdrawers`

## Important

All HTTP requests return instantly. But the actual processes take long time to complete.

Please look into the logs to track the actual execution. 

