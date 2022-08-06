export class Book {
    id?: number
    title?: string
    author?: string
    year?: number

    constructor (data: Book) {
        this.id = data?.id
        this.title = data?.title
        this.author = data?.author
        this.year = data?.year
    }
}

export interface BookRepository {
    getBookById(id:number): Promise<Book|null>
    countBooks(): Promise<number>
    getBooksPagination(page: number, size: number): Promise<Book[]>
}