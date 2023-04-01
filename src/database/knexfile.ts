import { databaseConfig } from '@/config'
import { Knex } from 'knex/types'
export const study:Knex.Config = {
    client: databaseConfig.databaseClient,
    connection: {
        host: databaseConfig.databaseHost,
        port: databaseConfig.databasePort,
        user: databaseConfig.databaseUser,
        password: databaseConfig.databasePassword,
        database: databaseConfig.databaseName,
        connectTimeout: databaseConfig.databaseConnectTimeout,
    },
    pool: {
        afterCreate: (conn: any, done: any) => {
            conn.query('SET SQL_SAFE_UPDATES = 1;', (err: any) => {
                done(err, conn)
            })
        },
        min: databaseConfig.databaseMinPool,
        max: databaseConfig.databaseMaxPool,
    },
}
