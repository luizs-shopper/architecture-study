import { Book } from './Book'
import { IBookRepository } from './IBookRepository'
import { TBookTable } from './TBookTable'
import { StudyQueryBuilder } from '../../database/queryBuilder'
import { fromSQL, fromSQLList } from './BookFactory'

export class SQLBookRepository implements IBookRepository {
    async getBookById(id: number): Promise<Book | null> {
        const result = await StudyQueryBuilder<TBookTable>('books')
            .where({ id })
            .first()
        if (!result) return null
        return fromSQL(result)
    }

    async countBooks(): Promise<number> {
        const result = await StudyQueryBuilder('books')
            .count({ count: '*' })
            .first()
        return result?.count || 0
    }

    async getBooksPagination(page = 1, size = 10): Promise<Book[]> {
        const offset = (page - 1) * size
        const results = await StudyQueryBuilder<TBookTable>('books')
            .offset(offset)
            .limit(size)
        return fromSQLList(results)
    }
}
