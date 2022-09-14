import { Request, Response, NextFunction } from 'express'
import BaseError from '@util/errors/BaseError'

export default function (
    err: BaseError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err) {
        console.error(err.stack)
        const code = err.code
        const title = err.title
        const message = err.message
        const status = err.status
        const error = { code, title, message }
        res.status(status).json({ error })
        next()
    }
}
