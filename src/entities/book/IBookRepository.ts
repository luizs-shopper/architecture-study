import { Book } from './Book'

/**
 * Interface do repositório de livros
 */
export interface IBookRepository {
    getBookById(id: number): Promise<Book | null>
    countBooks(): Promise<number>
    getBooksPagination(page: number, size: number): Promise<Book[]>
}
