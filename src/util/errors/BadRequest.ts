import BaseError from './BaseError'

export default class BadRequestError extends BaseError {
    constructor(message?: string, code?: string, title?: string) {
        super(message || 'Bad Request', code, title)
        this.status = 400
        this.code = code ? code : 'ERR400'
    }
}
