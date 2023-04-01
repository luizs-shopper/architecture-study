import { Book } from './Book'

describe('Book', () => {
    const book = new Book({})
    it('deve ter um id', () => {
        expect(book).toHaveProperty('id')
    })
    it('deve ter um título', () => {
        expect(book).toHaveProperty('title')
    })
    it('deve ter um autor', () => {
        expect(book).toHaveProperty('author')
    })
    it('deve ter o ano de publicação', () => {
        expect(book).toHaveProperty('year')
    })
})
