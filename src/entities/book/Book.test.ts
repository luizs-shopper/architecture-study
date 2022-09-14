import { Book } from './Book'

describe('Book', () => {
    it('deve ter um id', () => {
        const book = new Book({})
        expect(book).toHaveProperty('id')
    })
    it('deve ter um título', () => {
        const book = new Book({})
        expect(book).toHaveProperty('title')
    })
    it('deve ter um autor', () => {
        const book = new Book({})
        expect(book).toHaveProperty('author')
    })
    it('deve ter o ano de publicação', () => {
        const book = new Book({})
        expect(book).toHaveProperty('year')
    })
})
