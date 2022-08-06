import { Book } from '.'
import { BookTable } from './BookTable'

export function fromSQL(result:BookTable): Book {
    return new Book(result)
}

export function fromSQLList(results:BookTable[]): Book[] {
    if (!results) return []
    return results.map((result) => fromSQL(result))
}