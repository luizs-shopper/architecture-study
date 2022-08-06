import { Book, BookRepository } from '../../entities/book'

export interface HompePageUseCaseInput {
    page?: number
    size?: number
}

export interface HomePageUseCaseOutput {
    page: number
    numberOfPages: number
    books: Book[]
}

export class HomePageEmptyError extends Error {}
export class InvalidPageError extends Error {}

export class HomePageUseCase {
    private page: number = 1
    private size: number = 10
    private repository: BookRepository

    constructor (repository: BookRepository) {
        this.repository = repository
    }

    prepare(input: HompePageUseCaseInput): void {
        if (!input.page) input.page = 1 // Por padrão a página 1
        if (!input.size) input.size = 10 // Por padrão 10 itens por página
        if (input.page <= 0) throw new InvalidPageError('Número de página inválido, a contagem inicia em 1')
        this.page = input.page
        this.size = input.size
    }

    async execute(): Promise<HomePageUseCaseOutput> {
        const numberOfBooks: number = await this.repository.countBooks()
        if (numberOfBooks === 0) throw new HomePageEmptyError('Nenhum livro cadastrado')
        const numberOfPages = Math.ceil(numberOfBooks / this.size)
        const books = await this.repository.getBooksPagination(this.page, this.size)
        return {
            page: this.page,
            numberOfPages,
            books
        }
    }
}