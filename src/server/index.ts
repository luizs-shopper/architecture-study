import { serverConfig } from '@/config'
import express, { Express } from 'express'

import errors from './middlewares/errors'
import homePageRouter from './routers/HomePageRouter'

const app: Express = express()
const port = serverConfig.serverPort

app.use('/', homePageRouter)
app.use(errors)

app.listen(port, () => {
    console.info('🚀 Server is running')
})
