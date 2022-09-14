import { knex } from 'knex'
import { Knex } from 'knex/types'
import { study } from './knexfile'

declare module 'knex/types/result' {
    interface Registry {
        Count: number
    }
}

export const StudyQueryBuilder: Knex = knex(study)
