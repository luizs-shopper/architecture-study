import { Book } from './Book'
import { TBookTable } from './TBookTable'

export function fromSQL(result: TBookTable): Book {
    return new Book(result)
}

export function fromSQLList(results: TBookTable[]): Book[] {
    if (!results) return []
    return results.map((result) => fromSQL(result))
}
