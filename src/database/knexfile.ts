import { Knex } from 'knex/types'
export const study:Knex.Config = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || ''),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        connectTimeout: 60000
    },
    pool: {
        afterCreate: (conn: any, done: any) => {
            conn.query('SET SQL_SAFE_UPDATES = 1;', (err: any) => {
                done(err, conn)
            })
        },
        min: 2,
        max: 10
    }

}