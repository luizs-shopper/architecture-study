import { Book, BookRepository } from '.'
import { BookTable } from "./BookTable"
import { StudyQueryBuilder } from '../../database/queryBuilder'
import { fromSQL, fromSQLList } from './factory'
import Knex from 'knex/types'

export class SQLBookRepository implements BookRepository {
    async getBookById(id: number): Promise<Book|null> {
        const result = await StudyQueryBuilder<BookTable>('books').where({ id }).first()
        if (!result) return null
        return fromSQL(result)
    }

    async countBooks(): Promise<number> {
        const result = await StudyQueryBuilder('books')
            .count({ count: '*' })
            .first()
        return result?.count || 0
    }

    async getBooksPagination(page: number = 1, size: number = 10): Promise<Book[]> {
        const offset = (page - 1) * size
        const results = await StudyQueryBuilder<BookTable>('books')
            .offset(offset).limit(size)
        return fromSQLList(results)
    }
}