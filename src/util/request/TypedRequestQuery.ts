import { Query } from 'express-serve-static-core'

export default interface TypedRequestQuery<T extends Query>
    extends Express.Request {
    query: T
}
