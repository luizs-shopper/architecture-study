import { Book } from './Book'
import { fromSQL, fromSQLList } from './BookFactory'
import { TBookTable } from './TBookTable'

const bookRow: TBookTable = {
    id: 1,
    title: 'A revolução dos bichos',
    author: 'George Orwell',
    year: 1945,
}

describe('Book Factory', () => {
    it('deve criar um livro a partir de um registro do banco de dados', () => {
        const book = fromSQL(bookRow)
        expect(book).toBeInstanceOf(Book)
    })
    it('deve criar uma lista de livros a partir de uma lista de registros do banco de dados', () => {
        const books = fromSQLList([bookRow])
        expect(books[0]).toBeInstanceOf(Book)
    })
})
