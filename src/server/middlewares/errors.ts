import { Request, Response, NextFunction } from 'express'
import BaseError from '@util/errors/BaseError'

/**
 * Middleware para tratamento de erros no servidor
 * Irá fazer com que o servidor retorne um JSON contendo:
 * - `code`: O código do erro
 * - `title`: O título do erro, caso exista
 * - `message`: A mensagem do erro
 *
 * @param err - Erro que aconteceu no servidor
 * @param req - Requisição recebida pelo servidor
 * @param res - Resposta a ser devolvida para o cliente
 * @param next - Função para executar o próximo middleware
 */
export default function (
    err: BaseError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err) {
        console.error(err.stack)
        const code = err.code
        const title = err.title
        const message = err.message
        const status = err.status
        const error = { code, title, message }
        res.status(status).json({ error })
        next()
    }
}
