export default class BaseError extends Error {
    name: string
    status: number = 500
    code: string
    title?: string

    constructor (message?:string, code?:string, title?:string) {
        super(message || 'Bad Request')
        Error.captureStackTrace(this, this.constructor)
        this.name = this.constructor.name
        this.title = title
        this.code = code ? code : 'ERR500'
    }
}