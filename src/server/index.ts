import { serverConfig } from '@/config'
import express, { Express } from 'express'
import { join } from 'path'

import errors from './middlewares/errors'
import homePageRouter from './routers/HomePageRouter'

const app: Express = express()
const port = serverConfig.serverPort

const docsDir = join(__dirname, '../../docs')
app.use('/api-docs', express.static(docsDir))

app.use('/', homePageRouter)
app.use(errors)

app.listen(port, () => {
    console.info('🚀 Server is running')
})
