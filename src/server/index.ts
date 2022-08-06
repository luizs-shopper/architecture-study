import express, { Express } from 'express'

import errors from './middlewares/errors'
import homePageRouter from './home-page'

const app: Express = express()
const port = parseInt(process.env.PORT || '80')

app.use('/', homePageRouter)
app.use(errors)

app.listen(port, () => {
    console.log(`🚀 Server is running`)
})

