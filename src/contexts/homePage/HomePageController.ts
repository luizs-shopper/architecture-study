import { Response, NextFunction } from 'express'
import { SQLBookRepository } from '@entities/book/SQLBookRepository'
import {
    HomePageEmptyError,
    HomePageUseCase,
    InvalidPageError,
} from '@contexts/homePage/HomePageUseCase'
import TypedRequestQuery from '@util/request/TypedRequestQuery'
import BadRequestError from '@util/errors/BadRequest'

const getHome = async (
    req: TypedRequestQuery<{ page?: string; size?: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const repository = new SQLBookRepository()
        const useCase = new HomePageUseCase(repository)
        const { page, size } = req.query
        useCase.prepare({
            page: page ? parseInt(page) : undefined,
            size: size ? parseInt(size) : undefined,
        })
        const result = await useCase.execute()
        res.json(result)
    } catch (e) {
        if (e instanceof InvalidPageError || e instanceof HomePageEmptyError) {
            next(new BadRequestError(e.message))
        }
        next(e)
    }
}

export { getHome }
