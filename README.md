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

## Local usage

##### Call `process` for all withdrawers
`pnpm run 01-process-all`

##### Call `process` for select few withdrawers
`pnpm run 02-process-priority`

## Important

All HTTP requests return instantly. But the actual processes take long time to complete.

Please look into the logs to track the actual execution. 

