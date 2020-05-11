import * as Sentry from '@sentry/node'
import httpServer from './app'

httpServer.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`)
})

// or using CommonJS
// const Sentry = require('@sentry/node');

Sentry.init({
  dsn:
    'https://d003d408147a45019cd8d0167188f6df@o382649.ingest.sentry.io/5211849',
})
